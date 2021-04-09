import { useEffect } from "react"
import { SHEET_ID } from "../utils/constants"

export default () => {
  useEffect(() => {
    window.location.assign(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit#gid=0`)
  }, [])
  return null
}
