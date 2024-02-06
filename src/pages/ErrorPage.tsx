import {  ErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse

  return (
    <div id="error-page" className="flex flex-col justify-center items-center">
       <h1 className="text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Page
        <i>{error.statusText }</i>
      </p>
    </div>
  )
}
 export default ErrorPage