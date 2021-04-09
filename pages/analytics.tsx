import { HOCKEYSTACK_KEY } from "../utils/constants";

export default () => null

export const getServerSideProps = async (context) => {
  const { res } =  context;
  res.writeHead(301, { location: `https://www.hockeystack.com/sharing/${HOCKEYSTACK_KEY}/dashboard` } );
  res.end();
}
