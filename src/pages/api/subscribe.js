const SUBSTACK_SUBSCRIBE_ENDPOINT = "https://newsletter.yourdigitalrights.org/api/v1/free?nojs=true";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizeString = (value, maxLength = 2048) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
};

const extractErrorMessage = (payload) => {
  if (!payload || !Array.isArray(payload.errors) || payload.errors.length === 0) {
    return "Unable to subscribe right now. Please try again.";
  }

  const firstMessage = payload.errors
    .map((entry) => entry && entry.msg)
    .find(Boolean);

  return firstMessage || "Unable to subscribe right now. Please try again.";
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const email = normalizeString(req.body?.email, 320).toLowerCase();
  const currentUrl = normalizeString(req.body?.currentUrl);
  const currentReferrer = normalizeString(req.body?.currentReferrer);
  const source = normalizeString(req.body?.source, 100) || "embed";

  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  const formBody = new URLSearchParams({
    email,
    source,
    first_url: "",
    first_referrer: "",
    current_url: currentUrl,
    current_referrer: currentReferrer,
    first_session_url: "",
    first_session_referrer: "",
    referral_code: "",
    referring_pub_id: "",
    additional_referring_pub_ids: "",
  });

  try {
    const response = await fetch(SUBSTACK_SUBSCRIBE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(400).json({
        message: extractErrorMessage(payload),
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(502).json({
      message: "Subscription service is currently unavailable.",
    });
  }
}
