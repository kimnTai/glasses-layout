import styled from "styled-components";

export default function Home() {
  return (
    <Style>
      <div className="bg-home-header">
        <div className="container py-296 text-end">
          <h2 className="color-brown fs-36">Promise-Desert 2020 早春系列</h2>
          <h1 className="color-brown fs-64 font-bold">看得清，才能看得遠</h1>
          <button className="btn color-white bg-red">立即購買</button>
        </div>
      </div>

      <div className="bg-azure">
        <div className="container py-80">
          <h2 className="color-brown fs-48 font-bold text-center mb-32">
            用專業的心，做專業的事
          </h2>
          <ul className="flex">
            <li className="">
              <img
                className="w-100"
                src="src/assets/image/home-section2-1.png"
                alt=""
              />
              <h3 className="color-brown fs-24 font-bold">單一價格</h3>
              <p className="">
                無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。
              </p>
            </li>
            <li className="">
              <img
                className="w-100"
                src="src/assets/image/home-section2-2.png"
                alt=""
              />
              <h3 className="color-brown fs-24 font-bold">20 分鐘即可取件</h3>
              <p className="">
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快
                20 分鐘即可完成。
              </p>
            </li>
            <li className="">
              <img
                className="w-100"
                src="src/assets/image/home-section2-3.png"
                alt=""
              />
              <h3 className="color-brown fs-24 font-bold">安心售後服務</h3>
              <p className="">
                我們提供長達 120
                天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </li>
            <li className="">
              <img
                className="w-100"
                src="src/assets/image/home-section2-4.png"
                alt=""
              />
              <h3 className="color-brown fs-24 font-bold">關於鏡片</h3>
              <p className="">
                使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Style>
  );
}

const Style = styled.div`
  .bg-home-header {
    background-repeat: no-repeat;
    background-image: url(src/assets/image/home-header.png);
    background-position: center;
    background-size: cover;
  }

  .btn {
    border: none;
    padding: 6px 12px 6px 12px;
    cursor: pointer;
  }
`;
