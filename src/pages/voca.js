import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

class VocaPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Voca" />
        <table>
          <thead>
            <tr>
              <th>V</th>
              <th>M</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>board of directors</td>
              <td>이사회</td>
            </tr>
            <tr>
              <td>exceed</td>
              <td>넘다, 초과하다</td>
            </tr>
            <tr>
              <td>sales quota</td>
              <td>판매 할당량</td>
            </tr>
            <tr>
              <td>regarding</td>
              <td>~에 관한</td>
            </tr>
            <tr>
              <td>except</td>
              <td>~을 제외하고</td>
            </tr>
            <tr>
              <td>exclusive</td>
              <td>독특한</td>
            </tr>
            <tr>
              <td>postpone</td>
              <td>연기하다</td>
            </tr>
            <tr>
              <td>undertake</td>
              <td>착수하다, 약속하다</td>
            </tr>
            <tr>
              <td>mediate</td>
              <td>중재하다, 이뤄 내다</td>
            </tr>
            <tr>
              <td>rush order</td>
              <td>긴급주문</td>
            </tr>
            <tr>
              <td>summary</td>
              <td>요약</td>
            </tr>
            <tr>
              <td>briefly</td>
              <td>간단히</td>
            </tr>
            <tr>
              <td>describe</td>
              <td>묘사하다, 표현하다</td>
            </tr>
            <tr>
              <td>brief</td>
              <td>간결한</td>
            </tr>
            <tr>
              <td>acquire</td>
              <td>인수하다, 획득하다</td>
            </tr>
            <tr>
              <td>afford</td>
              <td>~할 여유가 있다, 제공하다</td>
            </tr>
            <tr>
              <td>adom</td>
              <td>꾸미다, 장식하다</td>
            </tr>
            <tr>
              <td>achieve</td>
              <td>달성하다, 성취하다</td>
            </tr>
            <tr>
              <td>decide</td>
              <td>결정하다</td>
            </tr>
            <tr>
              <td>unrestricted</td>
              <td>무제한의, 제한이 없는</td>
            </tr>
            <tr>
              <td>entitle</td>
              <td>자격을 주다</td>
            </tr>
            <tr>
              <td>executive</td>
              <td>관리직</td>
            </tr>
            <tr>
              <td>region</td>
              <td>부위, 지역</td>
            </tr>
            <tr>
              <td>appoint</td>
              <td>정하다</td>
            </tr>
            <tr>
              <td>excessive</td>
              <td>과도한, 지나친</td>
            </tr>
            <tr>
              <td>supplementary</td>
              <td>보충의</td>
            </tr>
            <tr>
              <td>artificial</td>
              <td>가짜의, 인위적인</td>
            </tr>
            <tr>
              <td>inessential</td>
              <td>중요하지 않은</td>
            </tr>
            <tr>
              <td>obtain</td>
              <td>얻다, 획득하다</td>
            </tr>
          </tbody>
        </table>
      </Layout>
    )
  }
}

export default VocaPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
