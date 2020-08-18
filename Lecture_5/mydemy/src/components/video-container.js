import React from 'react';

export default (props) => {
  const [flag, setFlag] = React.useState(false);
  const [flag2, setFlag2] = React.useState(false);

  React.useEffect(() => {
    console.log('called from useEffect')

    return () => {
      console.log('component cleaned up')
    }
  }, [flag2])

  React.useEffect(() => {
    console.log('fetch from api')
  }, [])


  return <>
    <h2>Flag: {flag ? 'true' : 'false'}</h2>
    <button onClick={() => setFlag(!flag)}>
      Toggle Flag
    </button>
    
    <h2>Flag2: {flag2 ? 'true' : 'false'}</h2>
    <button onClick={() => setFlag2(!flag2)}>
      Toggle Flag2
    </button>

    <iframe width="560" height="315" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </>
}
