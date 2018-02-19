import Layout from "../components/Layout"
import {Grid, Row, Col} from 'react-bootstrap'
import GroupCreation from "../components/GroupDetails/GroupCreation"

const Group = (props) => (
  <Layout>
  <Grid>
    <Row>
      <Col xs={12}>
        <GroupCreation />
      </Col>
    </Row>
  </Grid>
  </Layout>
);

export default Group;
