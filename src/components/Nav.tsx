import { Link } from 'react-router-dom';
import mmcLogo from '../assets/mmc-logo.svg';
import '../styles/nav.css';


interface LinkStyleType {
    border: String;
    padding: String;
    margin: String;
}
interface SectionStyleType {
    display: String;
    fontFamily: String;
    justifyContent: String;
    alignItems: String;
    flexDirection: String;
    // padding: String;
    // margin: String;
}
export default function Nav() {
    const linkStyle: LinkStyleType = {
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
    }
    const sectionStyle: SectionStyleType = {
        display: 'flex',
        fontFamily: 'sans-serif',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // padding: '10px',
        // margin: '10px'
    };

    return (
        <nav className='main-header-menu'>
            <h1>MMC</h1>
            <a href='https://www.mullenconsulting.biz' target='_blank' rel='noreferrer'>
                <img src={mmcLogo} className='logo' alt='MMC Logo' />
            </a>
            <section style={sectionStyle}>
                <div style={linkStyle}>
                    <Link to='/'>About Me</Link>
                </div>
                <div style={linkStyle}>
                    <Link to='/portfolio'>Porfolio</Link>
                </div>
                <div style={linkStyle}>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div style={linkStyle}>
                    <Link to='/resume'>Resume</Link>
                </div>
            </section>
        </nav>
    );
}