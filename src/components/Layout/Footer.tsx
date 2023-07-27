import fb from "@/assets/image/ic-social-fb.png";
import ig from "@/assets/image/ic_social_ig.png";
import line from "@/assets/image/ic_social_line.png";
import styled from "styled-components";

export default function Footer() {
  return (
    <Style>
      <div className="container">
        <div className="top-block flex justify-between items-center flex-wrap">
          <ul className="flex">
            <li className="color-white mr-48">首頁</li>
            <li className="color-white mr-48">系列鏡框</li>
            <li className="color-white mr-48">門市據點</li>
            <li className="color-white mr-48">部落格</li>
            <li className="color-white">常見問題</li>
          </ul>

          <div className="flex">
            <img className="w-48 mr-32" src={fb} alt="" />
            <img className="w-48 mr-32" src={ig} alt="" />
            <img className="w-48" src={line} alt="" />
          </div>

          <div className="phone-block w-full flex items-center">
            <span className="fs-40 color-white mr-22 material-symbols-outlined">
              call
            </span>
            <h2 className="fs-36 color-white">0800-000-000</h2>
          </div>

          <div className="w-full flex items-center">
            <span className="fs-40 color-white mr-22  material-symbols-outlined">
              mail
            </span>
            <h2 className="fs-36 color-white">glasses@business.com</h2>
          </div>
        </div>

        <hr className="border-white my-32"></hr>

        <div className="bottom-block flex justify-between">
          <p className="color-white">
            Copyright © 2020 Glasses.All rights reserved.
          </p>
          <div className="flex">
            <p className="color-white mr-48">隱私權政策</p>
            <p className="color-white">服務條款</p>
          </div>
        </div>
      </div>
    </Style>
  );
}

const Style = styled.footer`
  background-color: var(--red);
  padding: 48px 0px 32px 0px;

  @media (max-width: 992px) {
    padding: 48px 0px 40px 0px;
  }
  @media (max-width: 768px) {
    padding: 24px 0px 24px 0px;

    h2 {
      font-size: 1rem;
    }
    ul {
      display: none;
    }
    img {
      width: 24px;
      margin-right: 0px;
      margin-left: 8px;
    }
    hr {
      margin: 24px 0px 16px 0px;
    }

    .material-symbols-outlined {
      font-size: 18px;
    }
    .phone-block {
      width: 50%;
    }
    .top-block {
      flex-direction: row-reverse;
    }
    .bottom-block {
      display: block;
      p {
        margin-top: 8px;
      }
      .flex {
        display: block;
      }
    }
  }
`;
