import { Component } from "react";
import withRoot from "../withRoot";
import fetchSheetData from "../utils/sheets";
import Link from 'next/link'


const styles = theme => ({
  container: {
    position: "relative",
    ...container,
      marginTop: 32,
    [theme.breakpoints.up("md")]: {
      marginTop: 60
    },
  },
  inner: {
    padding: 30
  }
});


const SitemapLink = ({companies}) => (
  <ul>
    {companies.map((company) => (<li><Link href={'/?company=' + company.domain+ '#nav'}><a>{company.name}</a></Link></li>))}
  </ul>
)


class Sitemap extends Component {
  state = {
    companies: [],
    companiesLoaded: false
  };

  async componentDidMount() {
    const data = fetchSheetData()
    .then((data)  => {
      this.setState({ 
        companies: data,
        companiesLoaded: true
      });
      console.error(data);
    });  
  }

  render() {
    return (
        <div>
          <h1>Sitemap:</h1>      
              {this.state.companiesLoaded ? (
                <SitemapLink companies={this.state.companies}/>
              ): null}
        </div>          
    );
  }
}

export default withRoot(Sitemap);
