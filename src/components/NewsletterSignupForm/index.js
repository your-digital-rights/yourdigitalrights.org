import { useEffect, useMemo, useRef, useState } from "react";
import * as S from "./styles";

const SUBSTACK_PAID_SUBSCRIBE_URL =
  "https://newsletter.yourdigitalrights.org/subscribe?utm_source=embed&utm_content=consciousdigital";
const SUBSTACK_TERMS_OF_USE_URL =
  "https://newsletter.yourdigitalrights.org/tos?utm_source=embed_publication";
const SUBSTACK_PRIVACY_POLICY_URL =
  "https://newsletter.yourdigitalrights.org/privacy?utm_source=embed_publication";
const SUBSTACK_INFORMATION_COLLECTION_NOTICE_URL =
  "https://substack.com/ccpa?utm_source=embed_publication#personal-data-collected";

const NewsletterSignupForm = ({
  layout = "compact",
  tone = "default",
  placeholder = "Type your email...",
  buttonText = "Subscribe",
}) => {
  const containerRef = useRef(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const canSubmit = useMemo(() => email.trim().length > 3 && !isSubmitting, [email, isSubmitting]);

  useEffect(() => {
    if (hasEnteredViewport || typeof window === "undefined") {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setHasEnteredViewport(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            setHasEnteredViewport(true);
            observer.disconnect();
            return;
          }
        }
      },
      { rootMargin: "250px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    let paidSubscribeWindow = null;
    if (typeof window !== "undefined") {
      paidSubscribeWindow = window.open("", "_blank");
      if (paidSubscribeWindow) {
        paidSubscribeWindow.opener = null;
      }
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          currentUrl: window.location.href,
          currentReferrer: document.referrer || "",
          source: "embed",
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || "Unable to subscribe right now. Please try again.");
      }

      if (paidSubscribeWindow && !paidSubscribeWindow.closed) {
        paidSubscribeWindow.location.replace(SUBSTACK_PAID_SUBSCRIBE_URL);
      } else {
        window.open(SUBSTACK_PAID_SUBSCRIBE_URL, "_blank", "noopener,noreferrer");
      }

      setSuccessMessage("Thanks. Continue in the new tab to complete your Substack subscription.");
      setEmail("");
    } catch (error) {
      if (paidSubscribeWindow && !paidSubscribeWindow.closed) {
        paidSubscribeWindow.close();
      }
      setErrorMessage(error.message || "Unable to subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.StyledContainer layout={layout} tone={tone} ref={containerRef}>
      {hasEnteredViewport ? (
        <>
          <S.StyledForm onSubmit={onSubmit} noValidate>
            <S.StyledInput
              type="email"
              name="email"
              placeholder={placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              aria-label="Email address"
              tone={tone}
            />
            <S.StyledSubmitButton type="submit" disabled={!canSubmit}>
              {buttonText}
            </S.StyledSubmitButton>
          </S.StyledForm>
          {(errorMessage || successMessage) && (
            <S.StyledStatus
              role="status"
              statusType={errorMessage ? "error" : "success"}
              tone={tone}
            >
              {errorMessage || successMessage}
            </S.StyledStatus>
          )}
        </>
      ) : (
        <S.StyledSkeleton aria-hidden="true">
          <S.StyledSkeletonInput tone={tone} />
          <S.StyledSkeletonButton tone={tone} />
        </S.StyledSkeleton>
      )}
      <S.StyledDisclaimer tone={tone}>
        By subscribing you agree to{" "}
        <S.StyledDisclaimerLink href={SUBSTACK_TERMS_OF_USE_URL} target="_blank" rel="noopener noreferrer">
          Substack&apos;s Terms of Use
        </S.StyledDisclaimerLink>
        ,{" "}
        their{" "}
        <S.StyledDisclaimerLink href={SUBSTACK_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </S.StyledDisclaimerLink>{" "}
        and their{" "}
        <S.StyledDisclaimerLink
          href={SUBSTACK_INFORMATION_COLLECTION_NOTICE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Information collection notice
        </S.StyledDisclaimerLink>
        .
      </S.StyledDisclaimer>
    </S.StyledContainer>
  );
};

export default NewsletterSignupForm;
