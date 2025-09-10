import React, { useEffect } from "react";

const FunctionalComponent = (props) => {
  // useEffect()
  // useEffect(()=>{
  //     // mounting

  //     //
  //     return(
  //         // clean up/ un mounting
  //     )
  // }, [dependencies])

  // componentDidMount
  useEffect(() => {
    console.log("Mounting Stage");
    console.log(props);
  }, []);

  useEffect(() => {
    console.log("updating stage");
    console.log(props);
  }, [props.state]);

  useEffect(() => {
    console.log("unmounting stage");
    return () => {
      console.log("Component Unmounted succesfully");
    };
  }, []);

  return <div>FunctionalComponent</div>;
};

export default FunctionalComponent;
