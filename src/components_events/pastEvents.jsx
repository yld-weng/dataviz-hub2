import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PastEvents = ({pastEvent}) => {
  
  return (
    <div className="w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 2xl:w-2/12 text-gray-100 px-6 lg:mt-16 pb-16 lg:py-6 border-t-4 border-gray-800 min-h-50" style={{background: "rgba(0,0,0,.6)", }}>
      <h1 className="text-xl pt-2 pb-6 font-semibold">Past Events</h1>
      
      {pastEvent.edges.map(({ node }) => {

        let description = node.frontmatter.description ? node.frontmatter.description : ""
        if(description.length >= 85){
          description = description.substring(0, 85).concat(" ...")
        }

        return (
          <div className="flex flex-wrap transition duration-500 p-3 w-full overflow-auto shadow-md hover:shadow-xl bg-white group border-t-2 border-solid border-r-8 border-gray-700 hover:border-r-8 hover:border-highlight_2" key={node.id}>
            <Link to={node.fields.slug}>
            <p style={{ fontFamily: "TUoS Stephenson",}} className="font-bold text-sm text-black">{node.frontmatter.title}</p>
            <p className="text-gray-700 hidden md:flex text-sm leading-4">{description}</p>
            <p className="mt-2 text-sm text-black">{node.frontmatter.date}</p>
            </Link>
          </div>
        )

      })} 
      
    </div>
  )


  
}

export default PastEvents

PastEvents.propTypes = {
  pastEvent: PropTypes.any,
}

