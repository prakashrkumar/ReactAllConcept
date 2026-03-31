import React, { useEffect, useState } from 'react'

const withData = (WrappedComponent, url) => {
   return function EnhancedComponent(props) {
      const [data, setData] = useState([])
      useEffect(() => {
         if (!url) return
         fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(() => setData([]))
      }, [url])

      return <WrappedComponent data={data} {...props} />
   }
}

export default withData
