import { SHEET_ID } from "../utils/constants"

export default () => null

export const getServerSideProps = async (context) => {
  const { res } =  context;
  res.writeHead(301, { location: `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit#gid=0` } );
  res.end();
}
