import Header from './Header.js'
import Head from "next/head"


const layoutStyle ={
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}

const Layout = (props) => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>
    </Head>
    <div>
        <Header />
        {props.children}
    </div>
  </div>
)

export default Layout
