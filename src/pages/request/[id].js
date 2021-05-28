import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';

import Donations from "../../components/Donations";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { generateCanonical, generateLangLinks } from "../../utils/langUtils";

const Request = () => {
  const router = useRouter()
  const { id } = router.query

  const Title = "TODO";
  const Description = "TODO";
  const BaseURL = "/d/" + id;

  // TODO: Noindex nofollow

  return (
    <div>
      <NextSeo
        title = {Title}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />       
      <Nav />
      <p>Hello World {id}</p>
      <Donations />
      <Footer />
    </div>
  )
};

export default Request
