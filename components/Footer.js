import Link from "next/link";
import Subtitle from "./Subtitle";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillPhone,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import P from "./P";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 py-10">
      <div className="flex justify-between pl-5 pr-5 lg:pl-20 lg:pr-20 flex-col lg:flex-row gap-5 lg:gap-3">
        <div className="flex flex-col gap-3">
          <Subtitle color="text-white">E-Shopy</Subtitle>
          <address>
            <P color="text-slate-400">1835 Keara Unions Suite 113</P>
            <P color="text-slate-400">Oregon</P>
            <P color="text-slate-400">USA</P>
            <div className="flex items-center">
              <AiFillPhone size={25} className="text-slate-400 mr-3" />
              <P color="text-slate-400">453.428.2544</P>
            </div>
            <div className="flex items-center">
              <MdEmail size={25} className="text-slate-400 mr-3" />
              <P color="text-slate-400">milton42@wuckert.info</P>
            </div>
          </address>
        </div>
        <div className="flex gap-3 flex-col">
          <Subtitle color="text-white">Menu</Subtitle>
          <Link href="/">
            <a className="text-slate-400">Inicio</a>
          </Link>
        </div>
        <div className="flex gap-3 flex-col">
          <Subtitle color="text-white">Social Networks</Subtitle>
          <div className="flex gap-3">
            <AiFillTwitterCircle
              size={30}
              className="text-white cursor-pointer"
            />
            <AiFillFacebook size={30} className="text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Subtitle color="text-white">Stores in</Subtitle>
          <div className="flex flex-col">
            <ul>
              <li className="text-slate-400">United State</li>
              <li className="text-slate-400">Canada</li>
              <li className="text-slate-400">Venezuela</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10">
        <P color="text-slate-400">
          Copyright Gianicola Jara &copy; {new Date().getFullYear()}
        </P>
      </div>
    </footer>
  );
};

export default Footer;
