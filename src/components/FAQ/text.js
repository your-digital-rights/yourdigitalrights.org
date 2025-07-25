import { FormattedMessage } from "react-intl";
import Regulations from "../../utils/regulations";
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Title = (
  <FormattedMessage id="faq.title" defaultMessage="Frequently Asked Questions" />
);

export default [
  {
    heading: (
      <FormattedMessage
        id="faq.heading.YDR"
        defaultMessage="What is YourDigitalRights.org?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.YDR.1"
        defaultMessage="YourDigitalRights.org is a free service that helps you regain control of your online privacy by making it easy to get organizations to delete or provide a copy of the personal information that they have on you. We do this by automating the process outlined in powerful data protection laws that give you the right to delete or access your data. In addition to sending requests to organizations, we can help ensure that requests are resolved in your favor."
      />
    ],
  },
  {   
    heading: (
      <FormattedMessage
        id="faq.heading.data-protection"
        defaultMessage="What are data protection laws?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.data-protection.1"
        defaultMessage="Data protection laws protect individuals with regard to the processing of their personal information by organizations. They define the responsibilities organizations have when processing personal information and grant individuals certain rights in relation to their data. Many countries have data protection laws; some go further in terms of the protection they provide than others."
      />
    ],
  },
  {   
    heading: (
      <FormattedMessage
        id="faq.heading.regulations"
        defaultMessage="What countries, states, or regulations are supported?"
      />
    ),
    body: [
      <div key="table" style={{overflow: "auto", margin: "0 -24px", display: "flex", justifyContent: "center"}}>
        <TableContainer component={Paper} style={{minWidth: "100%", maxWidth: "fit-content"}} >
          <Table size="small" aria-label="regulation table" style={{fontSize: "16px", minWidth: "100%"}}>
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: "600"}}><FormattedMessage id="faq.body.regulations.location" defaultMessage="Location"/></TableCell>
                <TableCell style={{fontWeight: "600"}}><FormattedMessage id="faq.body.regulations.short-name" defaultMessage="Abbreviation"/></TableCell>
                <TableCell style={{fontWeight: "600"}}><FormattedMessage id="faq.body.regulations.name" defaultMessage="Full Name"/></TableCell>
                <TableCell sx={{fontWeight: "600", display: { xs: "none", sm: "none", md: "table-cell" }}}><FormattedMessage id="faq.body.regulations.timelimit" defaultMessage="Time to Reply"/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>           
              { Object.keys(Regulations).sort().map((key) => 
                <TableRow key={key}>
                  <TableCell style={{fontWeight: "500"}}>{Regulations[key].geography}</TableCell>
                  <TableCell style={{fontWeight: "500"}}><a rel="noreferrer noopener" href={Regulations[key].regulationURL} target="_blank" >{Regulations[key].displayName}</a></TableCell>
                  <TableCell style={{fontWeight: "500"}}>{Regulations[key].longName}</TableCell>
                  <TableCell sx={{fontWeight: "500", display: { xs: "none", sm: "none", md: "table-cell" }}}>{Regulations[key].timeLimit} days</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>,
      <FormattedMessage
        id="faq.body.regulations.1"
        defaultMessage="Please <a>contact us</a> if you would like to help us implement support for additional regulations."
        values={{
          a: txt => ( <a href="mailto:info@yourdigitalrights.org?subject=I'd like to help implement a new regulation">{txt}</a>),
        }}
    />,
    ],    
  },  
  {    
    heading: (
      <FormattedMessage
        id="faq.heading.requests"
        defaultMessage="What kind of requests can I make using this service?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage id="faq.body.requests.1" 
          defaultMessage="We support two types of requests:" />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body.requests.1.1"
            defaultMessage="<b>Data Deletion Requests</b> (also known as erasure requests or the right to be forgotten requests) allow you to ask an organization to delete your personal information."
            values={{
              b: txt => (<strong>{txt}</strong>),
            }}
          />,
          <FormattedMessage
            id="faq.body.requests.1.2"
            defaultMessage="<b>Access requests</b> (also known as Subject Access Requests or SAR for short) allow you to ask an organization to provide a copy of your personal information."
            values={{
              b: txt => (<strong>{txt}</strong>),
            }}
          />,
        ],
      },     
    ],
  },
  {
    heading: (
      <FormattedMessage 
        id="faq.heading.how" 
        defaultMessage="How does the service work?" 
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.how.1"
        defaultMessage="After selecting an organization and filling in a short form, we will generate a request email addressed to the organization you have chosen. The email will open up in your email app for you to review and send. Optionally, we can follow up with you a short while after a request has been sent to ensure that the request is resolved in your favor. This can include sending the organization reminder emails or escalating to the government regulatory agency."
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading.refuse"
        defaultMessage="Can organizations say no?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage 
          id="faq.body.refuse.1" 
          defaultMessage="Data protection laws allow organizations to refuse to delete your personal information in certain exceptional circumstances. Here are some general examples, but you should read the specific regulation that applies to you for details:" />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body.refuse.1.1"
            defaultMessage="When the organization is legally obliged to keep hold of your data (for example, financial institutions must keep records of your transactions in order to comply with anti-money laundering regulations)"
          />,
          <FormattedMessage
            id="faq.body.refuse.1.2"
            defaultMessage="When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic, and literary purposes)"
          />,
          <FormattedMessage
            id="faq.body.refuse.1.3"
            defaultMessage="When keeping hold of your data is necessary for public health reasons"
          />,
          <FormattedMessage
            id="faq.body.refuse.1.4"
            defaultMessage="When keeping your data is necessary for establishing, exercising, or defending legal claims"
          />,
          <FormattedMessage
            id="faq.body.refuse.1.5"
            defaultMessage="When erasing your data would prejudice scientific or historical research or archiving that is in the public interest"
          />,                    
        ],
      },
    ],
  },
  {
    heading: (
      <FormattedMessage 
        id="faq.heading.escalate" 
        defaultMessage="What should I do if an organization does not fully comply with my request?" 
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.escalate.1"
        defaultMessage="Data protection laws provide various escalation mechanisms for such cases, including the possibility of filing a complaint against the organization with a government regulatory agency or taking the organization to court (called a private right of action)."
      />,
      <FormattedMessage
        id="faq.body.escalate.2"
        defaultMessage="If this sounds complicated, please don't worry; we can help. When submitting a data request via this service, turn on the “Smart Follow-up Assistance” option to get personalized advice on what to do in case an organization has not complied with your request. We will help you communicate with the organization and if needed, escalate to the government regulatory agency."
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading.verify"
        defaultMessage="An organization has asked me to provide further personal information to verify my identity. Is this legal? Can they use this information for other purposes?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.verify.1"
        defaultMessage="Data protection laws require organizations to verify the identity of the individual submitting a request to prevent fraud. Most laws also state that the verification method should be proportional to the nature of the data involved. For example, if you request a copy of your message history from a typical internet forum a simple verification that you own the email address associated with your account should be enough. On the other hand, if you request your transaction history from a financial institution, they are justified in asking you to provide additional information such as a photo ID and proof of address."
      />,
      <FormattedMessage
        id="faq.body.verify.2"
        defaultMessage="In most cases, a simple verification that you own the email address associated with your account should be enough. When you use this service to send a request, an email is sent from your email app, which provides this basic verification."
      />,
      <FormattedMessage
        id="faq.body.verify.3"
        defaultMessage="To further protect you personal information, the requests we generate on your behalf explicitly prohibit organizations from using the personal information included as part of the request for any purpose other than fulfilling the request."
      />,      
    ],
  },
  {
    heading: (
      <FormattedMessage 
        id="faq.heading.trust" 
        defaultMessage="Who is operating this service? Can I trust you?" 
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.trust.1"
        defaultMessage="We are a registered nonprofit organization called <a>Conscious Digital</a>. We believe in transparency, and therefore the source code for this service is <aa>open source</aa>. As for October 2022, we have helped individuals submit more than 100,000 requests to various organizations"
        values={{
          a: txt => ( <a rel="noreferrer noopener" target="_blank" href="https://consciousdigital.org">{txt}</a>),
          aa: txt => ( <a rel="noreferrer noopener" target="_blank" href="https://github.com/your-digital-rights">{txt}</a>),
        }}
      />,
      <FormattedMessage
        id="faq.body.trust.2"
        defaultMessage="We are independent, do not sell your personal information, are not affiliated with any of the organizations which we help you send data requests to. We also do not provide these organizations with any services. Finally, we are funded by your <a>donations</a>."
        values={{
          a: txt => ( <a rel="noreferrer noopener" href="https://opencollective.com/consciousdigital" target="_blank" >{txt}</a>),
        }}        
      />,
      <FormattedMessage
        id="faq.body.trust.3"
        defaultMessage="We have designed this service so that, by default, it does not require us to collect any of your personal information. When certain optional features require you to provide personal information, we delete this data after 120 days. Please see our <a>privacy policy</a> for details."
        values={{
          a: txt => ( <Link href="/privacy" target="_blank">{txt}</Link>),
        }}
      />,      
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading.new-regulation"
        defaultMessage="My country has a new data protection law. Will you support it?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.new-regulation.1"
        defaultMessage="We would like to support all data protection laws which grant individuals the right to access and delete their personal information. Please <a>contact us</a> if you would like us to add support for a particular regulation."
        values={{
          a: txt => ( <a href="mailto:info@yourdigitalrights.org?subject=I'd like to help implement a new regulation">{txt}</a>),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading.contact"
        defaultMessage="I have a further question, how can I contact you?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body.contact.1"
        defaultMessage="Please understand that we cannot provide personal support regarding specific data requests or your experience with a particular organization. We know that, in some cases, organizations can be pretty frustrating, but unfortunately, we cannot help and will not reply to such emails."
      />,
      <FormattedMessage
        id="faq.body.contact.2"
        defaultMessage="For all other requests, please contact us via <a>email</a>."
        values={{
          a: txt => ( <a target="_blank" href="mailto:info@yourdigitalrights.org">{txt}</a>),
        }}        
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading.contribute"
        defaultMessage="This service is fantastic. Can I help?"
      />
    ),
    body: [
      <FormattedMessage 
        id="faq.body.contribute.1" 
        defaultMessage="Yes, please!" 
      />,
      <FormattedMessage
        id="faq.body.contribute.2"
        defaultMessage="We rely on <a>donations</a> to ensure our long-term financial stability and independence. You can make a contribution here."
        values={{
          a: txt => ( <a rel="noreferrer noopener" href="https://opencollective.com/consciousdigital" target="_blank">{txt}</a>),
        }}                
      />,
      <FormattedMessage
        id="faq.body.contribute.3"
        defaultMessage="Please see the information on <a>this page</a> if you would like to report a bug, help translate the website, assist with the development, or conduct research."
        values={{
          a: txt => ( <Link href="/contribute" target="_blank">{txt}</Link>),
        }}        
      />,              
    ],
  },
];
