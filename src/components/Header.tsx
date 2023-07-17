import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Style>
      <nav className="container flex justify-between items-center">
        <div className="img-block">
          <img className="w-80" src="/logo-white.png" alt="" />
        </div>
        <ul className="flex justify-between">
          <li className="ml-64">
            <Link className="fs-20 color-white" to="/">
              系列鏡框
            </Link>
          </li>
          <li className="ml-64">
            <Link className="fs-20 color-white" to="/">
              門市據點
            </Link>
          </li>
          <li className="ml-64">
            <Link className="fs-20 color-white" to="/">
              部落格
            </Link>
          </li>
          <li className="ml-64">
            <Link className="fs-20 color-white" to="/">
              常見問題
            </Link>
          </li>
        </ul>
      </nav>
    </Style>
  );
}

const Style = styled.header`
  background-color: var(--red);
  padding: 25px 0px 25px 0px;

  @media (max-width: 768px) {
    padding: 0px 0px 0px 0px;
    align-items: start;
    justify-content: space-around;

    nav {
      flex-direction: column;
    }

    ul {
      width: 100%;
      flex-wrap: wrap;

      li {
        margin: 0px;
        width: 50%;
        border: 1px solid #ffffff;
        text-align: center;
        font-size: 16px;

        a {
          display: block;
          padding: 12px 0px 12px 0px;
        }
      }
    }

    .img-block {
      padding: 16px 0px 16px 0px;
      width: 100%;
    }
  }
`;
