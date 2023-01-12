import React from "react";
import './index.css';

function Footer(){
    return(
        <>
        <div className="footer_div">
            <h1>There’s even more to buy.</h1>
            <p>Mobile Shopee has an extensive library of featured Mobiles, award-winning Mobile Shopee originals and more. Buy as much as you want, anytime you want.</p>
            <a href="https://www.netflix.com/">JOIN NOW</a>
        </div>
        <div className="footer_div1">
            <div className="ancher"><a href="https://help.netflix.com/contactus">Questions? Contact us.</a></div>
            <div className="footer_flex">
            <div>
                <a href="https://help.netflix.com/support/412">FAQ</a>
                <a href="http://ir.netflix.com/">Investor Relations</a>
                <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                <a href="https://fast.com/">Speed Test</a>
            </div>
            <div>
                <a href="https://help.netflix.com/">Help Centre</a>
                <a href="https://jobs.netflix.com/jobs">Jobs</a>
                <a href="https://www.netflix.com/in/browse/genre/1191605#">Cookie Preferences</a>
                <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
            </div>
            <div>
                <a href="https://www.netflix.com/youraccount">Account</a>
                <a href="https://www.netflix.com/watch">Ways to BUY</a>
                <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                <a href="https://www.netflix.com/in/browse/genre/839338">Only on Mobile Shopee</a>
            </div>
            <div>
                <a href="https://media.netflix.com/">Media Centre</a>
                <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                <a href="https://help.netflix.com/contactus">Contact Us</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Footer;