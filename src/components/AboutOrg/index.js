import { FormattedMessage } from "react-intl";
import { useState } from "react";
import * as S from "./styles";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const AboutOrg = ({ selectedCompany }) => {
  const [showMore, setShowMore] = useState(false);  
  return (
    <S.StyledAbout>
      <S.StyledContainer id="about-org">
        <S.StyledAboutText id="about-org-text">
          <S.StyledHeading id="about-org-heading">
            <S.StyledTitle
              variant={"h4"}
              gutterBottom={true}
              component={"h3"}
            >
              <FormattedMessage 
                id="aboutOrg.details" 
                defaultMessage="About {org}" 
                values={{
                  org: selectedCompany.name
                }}
              />
            </S.StyledTitle>
          </S.StyledHeading>
          <S.StyledDetailText id="about-detail-text">
            { (selectedCompany.slogan.length > 0 || (selectedCompany.description.length > 0)) && (
              <strong>
                <FormattedMessage id="aboutOrg.description" defaultMessage="In their own words:" />
                <br/>
              </strong>
            )}
            { selectedCompany.slogan.length > 0 && (
              <>
                {selectedCompany.slogan}
                <br/>
              </>
            )}
            { selectedCompany.description.length > 0 && (
              <>
                {showMore ? selectedCompany.description.substring(0, 2000) : `${selectedCompany.description.substring(0, 300)}`}
                <br/>
                <S.StyledShowMore onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show less" : "Show more"}
                </S.StyledShowMore>
                <br/>
              </>
            )}
            { selectedCompany.industries.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.industry" defaultMessage="Industry:" />{" "}
                </strong>
                {selectedCompany.industries}
                <br/>
              </>
            )}  
            { selectedCompany.specialties.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.specialties" defaultMessage="Company Specialties:" />{" "}
                </strong>
                {selectedCompany.specialties}
                <br/>
              </>
            )}
            { selectedCompany.type.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.type" defaultMessage="Company Type:" />{" "}
                </strong>
                {selectedCompany.type}
                <br/>
              </>
            )}     
            { selectedCompany.headquarters.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.headquarters" defaultMessage="Headquarters:" />{" "}
                </strong>
                {selectedCompany.headquarters}
                <br/>
              </>
            )}    
            { selectedCompany.founded.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.founded" defaultMessage="Founded:" />{" "}
                </strong>
                {selectedCompany.founded}
                <br/>
              </>
            )}                                                               
            <strong>
              <FormattedMessage id="aboutOrg.email" defaultMessage="Email:" />{" "}
            </strong>
            <S.StyledLink
              target="_blank"
              rel="noreferrer noopener"
              href={`mailto:${selectedCompany.email}`}
            >
              {selectedCompany.email}
            </S.StyledLink>
            <br />
            {selectedCompany.privacyPolicy.length > 0 && (
              <strong>
                <FormattedMessage 
                  id="aboutOrg.privacyPolicy" 
                  defaultMessage="View {org}'s <a>Privacy Policy</a>"
                  values={{
                    org: selectedCompany.name,
                    a: txt => (<S.StyledLink target="_blank" rel="nofollow noreferrer noopener" href={selectedCompany.privacyPolicy}><strong>{txt}</strong></S.StyledLink>),
                  }}  
                />
              </strong>
            )}            
          </S.StyledDetailText>
        </S.StyledAboutText>
      </S.StyledContainer>
    </S.StyledAbout>
  );
};

export default AboutOrg;
