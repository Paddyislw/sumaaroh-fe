import { useState } from "react"
import CardAnimation from "../components/FreeProposal/CardAnimation"
import FreeProposal from "../components/FreeProposal/FreeProposal"

const FreeProposalPage = () => {
  const [startAnimation,setStartAnimation] = useState(false)
  return (
    <div>
      <CardAnimation setStartAnimation={setStartAnimation}/>
      <FreeProposal startAnimation={startAnimation}/>
    </div>
  )
}

export default FreeProposalPage