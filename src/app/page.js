
export default function Home() {
  return (
    <main className="flex min-h-screen justify-center p-8">

      <div className="max-w-lg">
        <div className="font-medium text-2xl">
          Hi, I'm Takahiro 👋
        </div>

        <p>
          I'm a Software Engineer, currently living in Tokyo, Japan.
          I'm interested in Backend, Robotics & AI.
        </p>

        <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white space-x-4">
          <li>
            <a href="mailto:takahiro.swe@example.com" aria-label="at-symbol" data-toggle="tooltip" data-placement="top" title="E-mail Me">
              <svg style={{ height: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hover:scale-125">
                <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5" d="M16.5 12a4.5 4.5.0 11-9 0 4.5 4.5.0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dohxjyus" target="_blank" rel="noopener" aria-label="brands/x">
              <svg style={{ height: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hover:scale-125">
                <path fill="currentcolor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="brands/instagram">
              <svg style={{ height: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class="hover:scale-125">
                <path fill="currentcolor" fill-rule="evenodd" d="M12.91 12.909c.326-.327.582-.72.749-1.151.16-.414.27-.886.302-1.578.032-.693.04-.915.04-2.68.0-1.765-.008-1.987-.04-2.68-.032-.692-.142-1.164-.302-1.578a3.185 3.185.0 00-.75-1.151 3.187 3.187.0 00-1.151-.75c-.414-.16-.886-.27-1.578-.302C9.487 1.007 9.265 1 7.5 1c-1.765.0-1.987.007-2.68.04-.692.03-1.164.14-1.578.301a3.2 3.2.0 00-1.151.75 3.2 3.2.0 00-.75 1.151c-.16.414-.27.886-.302 1.578C1.007 5.513 1 5.735 1 7.5s.007 1.987.04 2.68c.03.692.14 1.164.301 1.578.164.434.42.826.75 1.151.325.33.718.586 1.151.75.414.16.886.27 1.578.302.693.031.915.039 2.68.039s1.987-.008 2.68-.04c.692-.03 1.164-.14 1.578-.301a3.323 3.323.0 001.151-.75zM2 6.735v1.53c-.002.821-.002 1.034.02 1.5.026.586.058 1.016.156 1.34.094.312.199.63.543 1.012.344.383.675.556 1.097.684.423.127.954.154 1.415.175.522.024.73.024 1.826.024H8.24c.842.001 1.054.002 1.526-.02.585-.027 1.015-.059 1.34-.156.311-.094.629-.2 1.011-.543.383-.344.556-.676.684-1.098.127-.422.155-.953.176-1.414C13 9.247 13 9.04 13 7.947v-.89c0-1.096.0-1.303-.023-1.826-.021-.461-.049-.992-.176-1.414-.127-.423-.3-.754-.684-1.098-.383-.344-.7-.449-1.011-.543-.325-.097-.755-.13-1.34-.156A27.29 27.29.0 008.24 2H7.057c-1.096.0-1.304.0-1.826.023-.461.021-.992.049-1.415.176-.422.128-.753.301-1.097.684s-.45.7-.543 1.012c-.098.324-.13.754-.156 1.34-.022.466-.022.679-.02 1.5zM7.5 5.25a2.25 2.25.0 100 4.5 2.25 2.25.0 000-4.5zM4.25 7.5a3.25 3.25.0 116.5.0 3.25 3.25.0 01-6.5.0zm6.72-2.72a.75.75.0 100-1.5.75.75.0 000 1.5z" clip-rule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/takahiro-ishiguro-05573919b/" target="_blank" rel="noopener" aria-label="brands/linkedin">
              <svg style={{ height: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="hover:scale-125">
                <path fill="currentcolor" d="M416 32H31.9C14.3 32 0 46.5.0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6.0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3.0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2.0 38.5 17.3 38.5 38.5.0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6.0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2.0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1mPKH17P7awe9PfEOq7JzVsggKPKpTq3C/view?usp=sharing" target="_blank" rel="noopener" aria-label="academicons/cv" data-toggle="tooltip" data-placement="top" title="Download my resume">
              <svg style={{ height: "1.5rem" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hover:scale-125">
                <path fill="currentcolor" d="M249.18 328.324c-9.788 15.384-19.179 30.434-40.222 45.055-11.256 7.89-37.164 23.306-73.99 23.306C64.709 396.685 8 345.605 8 255.801c0-78.486 53.345-140.486 128.466-140.486 30.434.0 57.474 10.521 77.387 26.304 18.414 14.65 27.038 29.304 34.563 42.456l-52.58 26.273c-3.762-8.626-8.29-17.649-19.913-27.406-12.784-10.155-25.54-13.152-36.46-13.152-42.821.0-65.364 39.825-65.364 84.145.0 58.238 29.7 87.143 65.364 87.143 34.563.0 48.48-24.042 57.474-39.426l52.243 26.673zm184.194-204.75H504l-92.037 265.22h-67.597l-90.904-265.22h70.625l54.843 188.6z" />
              </svg>
            </a>
          </li >
        </ul>
      </div>

    </main >
  );
}
