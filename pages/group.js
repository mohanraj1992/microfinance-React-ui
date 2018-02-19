import Layout from "../components/Layout"
import  Link from 'next/link'
import fetch from 'isomorphic-fetch'
import GroupDetails from "../components/GroupDetails"
import {Grid, Row, Col} from 'react-bootstrap'

const Group = (props) => (
  <Layout>
    <Grid>
      <Row>
        <Col xs={12}>
          <div>
            <p> Group </p>
            <GroupDetails group={props.groups}></GroupDetails>
          </div>
        </Col>
      </Row>
    </Grid>

  </Layout>
);

Group.getInitialProps = async function(){
  const res = await fetch('https://microfinancengo.herokuapp.com/api/groups/')
  var data = await res.json()
  console.log(`Movie data fetched. Count:`,data)
  data = JSON.parse(JSON.stringify(data))
  return {
    groups: data
  }
}

export default Group;
