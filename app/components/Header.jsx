import React from "react";
import { Col, Row } from "antd";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <Row className="bg-slate-600 h-12 flex justify-around items-center fixed w-full z-10">
        <Link href={"/"}><Col span={8} className="flex justify-center items-center text-gray-300 font-bold text-xl">Home</Col></Link>
        <Link href={"/about"}><Col span={8} className="flex justify-center items-center text-gray-300 font-bold text-xl">About</Col></Link>
        <Link href={"/contact"}><Col span={8} className="flex justify-center items-center text-gray-300 font-bold text-xl">Contact</Col></Link>

      </Row>
    </div>
  );
};

export default Header;
