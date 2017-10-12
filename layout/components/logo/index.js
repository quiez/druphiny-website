import * as React from 'react';

type Props = {
  height?: number,
};

const Logo = ( { height }: Props ) => (
  <div className="logo">
    <svg
      width="481"
      height="500"
      viewBox="0 0 481 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M460.832 6.737l-70.98 60.976c-14.46 12.28-33.739 35.147-43.378 52.085l-28.918 49.12c-9.64 16.091-30.67 29.218-46.882 29.642-16.211.423-43.815.423-60.027 0-16.212-.424-38.119-13.974-46.882-29.642l-28.918-49.12c-9.64-16.091-29.356-39.381-43.377-52.085L20.051 6.737C6.031-5.543-2.732-.462.773 17.323l16.212 81.726c3.943 18.209 16.65 44.039 29.356 58.013l51.263 55.895c12.707 13.974 19.279 39.804 14.459 57.59l-2.19 9.74c-4.82 17.784-7.45 47.848-5.696 66.057l1.752 24.136c1.314 18.209 10.078 39.805 17.965 47.85 7.886 7.623 18.84 22.867 23.222 33.876 4.82 11.01 19.278 26.678 32.422 36.418 13.145 9.738 32.424 13.973 42.063 9.738 10.515-4.234 26.728-4.234 36.367 0 10.077 4.235 28.918-.423 42.939-9.738 13.582-9.317 28.04-25.831 32.422-36.418 4.82-10.586 15.336-26.253 23.223-33.876 7.887-7.621 16.65-29.218 17.964-47.85l1.752-24.136c1.314-18.209-.876-48.273-5.696-66.058l-2.19-9.74c-4.82-17.785 1.314-43.615 14.46-57.59l51.262-55.894c12.707-13.974 25.852-39.804 29.356-58.013l16.212-81.726c4.82-17.785-3.943-22.442-18.84-10.586zM265.416 450.089c-7.448 7.2-15.773 20.326-18.402 27.524-3.505 7.2-7.887 7.2-10.954 0-3.505-7.621-11.392-20.325-17.526-27.524-7.448-7.198-4.82-9.739 5.258-5.081s26.727 4.658 36.366 0c9.64-4.234 12.269-2.117 5.258 5.081z"
        fill="white"
      />
    </svg>
    <style jsx>{`
      .logo {
        text-align: center;
        width: 100%;
      }

      .logo svg {
        width: auto;
        height: ${height}px;
      }

      @media only screen and (max-width: 40em) {
        .logo svg {
          width: 48px;
          height: 48px;
        }
      }
    `}</style>
  </div>
);

Logo.defaultProps = { height : 48 };

export default Logo;
