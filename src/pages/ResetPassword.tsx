const ResetPassword:React.FC = () => {
  return (
<div className="grid place-items-center">
      <div className="shadow-md p-6 rounded-md w-[500px] bg-white">
        <h1 className="text-2xl pb-3 text-center">Reset Password</h1>
      <form >
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="oldPassword">Old Password</label>
          <input type="text" name="oldPassword" id="oldPassword" className="input-solid" required />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="newPassword">New Password</label>
          <input type="text" name="newPassword" id="newPassword" className="input-solid" required />
        </div>
        <button className="btn-primary" type="submit">Reset password</button>
      </form>
      </div>
    </div>
  )
}

export default ResetPassword