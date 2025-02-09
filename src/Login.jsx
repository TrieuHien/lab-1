import { FaGoogle, FaFacebook } from "react-icons/fa";
import logoImage from "./assets/img/logo.png"; // Thay thế bằng ảnh logo "Believe RESTAURANT"
import backgroundImage from "./assets/img/nen.png"; // Ảnh hamster dễ thương
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      {/* Form đăng nhập */}
      <div className="login-form">
        {/* Logo bằng hình ảnh */}
        <div className="logo-container">
          <img src={logoImage} alt="Believe RESTAURANT" className="logo" />
        </div>

        {/* Form */}
        <form>
          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="username@gmail.com" />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          {/* Nút Sign in */}
          <button className="sign-in-btn">Sign in</button>
        </form>

        {/* Đăng nhập với Google hoặc Facebook */}
        <div className="or-text">Or Continue With</div>
        <div className="social-login">
          <button className="social-btn google">
            <FaGoogle /> Google
          </button>
          <button className="social-btn facebook">
            <FaFacebook /> Facebook
          </button>
        </div>

        {/* Đăng ký */}
        <div className="register">
          Don’t have an account yet? <a href="#">Register for free</a>
        </div>
      </div>

      {/* Hình ảnh nền */}
      <div className="image-section">
        <img src={backgroundImage} alt="Cute Hamster" />
      </div>
    </div>
  );
};

export default Login;
