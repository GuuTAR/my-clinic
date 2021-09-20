import "./styles.scss";

import Navbar from "../../component/navbar/Navbar";
import HomeMenu from "./component/menu/Menu";
import Row from "../../component/row/Row";
import Col from "../../component/col/Col";
import Chart from "react-google-charts";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Row className="body" gap={10}>
        <HomeMenu />
        <Col className="content" align="center">
          <h1>Welcome to Test-Clinic Patient Manager</h1>
          <Row style={{ width: "100%" }}>
          <Col style={{ width: "100%" }}>
          <h2>ตอนนี้มียา 2 รายการที่หมดลงแล้ว! ดูรายละเอียด</h2>
          </Col>
            <Col align="center" style={{ width: "50%" }}>
              <h2>Medicine Left</h2>
              <p>พาราเซตามอล เหลือ 2 เม็ด</p>
              <p>ยาแก้ปวดท้อง เหลือ 8 เม็ด</p>
              <p>ยาแก้ไอ เหลือ 12 เม็ด</p>
              <p></p>
            </Col>
            <Col align="center" style={{ width: "50%" }}>
              <h2>Yesterday</h2>
              <p>คนไข้ 12 คน</p>
              <p>ใช้ยาไป 12 หน่วย (เม็ด / ขวด)</p>
              <p>กำไร 3220 บาท</p>
            </Col>
            <Col align="center" style={{ width: "100%" }}>
              <h2>Profit</h2>
              <Chart
                width={800}
                height={300}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    { type: "string", label: "Day" },
                    { type: "number", label: "Income" },
                    { type: "number", label: "Outcome" }
                  ],
                  ['1 Sep 2021', 100, 60],
                  ['2 Sep 2021', 80, 50],
                  ['3 Sep 2021', 120, 60],
                  ['4 Sep 2021', 30, 40],
                  ['5 Sep 2021', 60, 50],
                  ['6 Sep 2021', 20, 60],
                  ['7 Sep 2021', 80, 70],
                  ['8 Sep 2021', 100, 50]
                ]}
                options={{
                  intervals: { style: "sticks" },
                  legend: "none",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
