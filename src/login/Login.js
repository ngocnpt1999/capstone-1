import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className="">TÀI KHOẢN CỦA TÔI</h2>
                    <form id="formConnexion" className="form-horizontal">
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="loginInput" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-10">
                                    <input name="email" type="email" className="form-control" id="loginInput" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPSWD" className="col-sm-2 control-label">Mật khẩu</label>
                                <div className="col-sm-10">
                                    <input name="passe" type="password" className="form-control" id="inputPSWD" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="createCookie" className="col-sm-2 control-label">&nbsp;</label>
                                <div className="col-sm-10">
                                    <label htmlFor="createCookie" className="">
                                        <input name="createCookie" type="checkbox" id="createCookie" defaultValue={1} /> Giữ cho tôi đăng nhập
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button name="connexion" type="submit" className="btn btn-primary">Đăng nhập</button>
                                    &nbsp; <span>•</span> &nbsp;
                                    <a style={{ paddingTop: '10px', paddingBottom: '10px' }} href="#" className="" title="Tạo một tài khoản">Tạo một tài khoản</a>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className='col-6'>
                    <div style={{ background: '#f3f3f3' }}>
                        <p>&nbsp;</p>
                        <h2>Quên mật khẩu</h2>
                        <form id="formPasseOublier" className="form-horizontal">
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="loginInputForget" className="col-sm-2 control-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" name="email" className="form-control" id="loginInputForget" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" name="resetPassword" className='btn btn-danger'>Đặt lại mật khẩu</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;