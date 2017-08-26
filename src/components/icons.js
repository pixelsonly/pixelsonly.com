import React from "react";
import PropTypes from "prop-types";
import theme from "../styles/theme";

const paths = {
  chevronRight: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z",
  readMore:
    "M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z",
  arrowRight: "M24 12l-12-9v5h-12v8h12v5l12-9z",
  github:
    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  linkedin:
    "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  twitter:
    "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
};

const Icon = props =>
  <svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg">
    <path d={paths[props.icon]} />
  </svg>;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  fill: theme.colors.mediumGray,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
};

export const MenuOpen = props =>
  <svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 24.797h20v4.818H0zM0 12.75h30v4.82H0zM0 .705h40v4.818H0z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>;

MenuOpen.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

MenuOpen.defaultProps = {
  fill: theme.colors.mediumGray,
  width: "40",
  height: "30",
  viewBox: "0 0 40 30",
};

export const MenuClose = props =>
  <svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    xmlns="http://www.w3.org/2000/svg">
    <g fill={props.fill} fillRule="evenodd">
      <path d="M34.62.71l2.83 2.83L3.38 37.61.55 34.782z" />
      <path d="M.55 3.54L3.38.71l34.07 34.072-2.83 2.828z" />
    </g>
  </svg>;

MenuClose.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

MenuClose.defaultProps = {
  fill: theme.colors.mediumGray,
  width: "38",
  height: "38",
  viewBox: "0 0 38 38",
};

export const NetlifyBadge = props =>
  <svg
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    xmlns="http://www.w3.org/2000/svg">
    <g fill={props.fill} fillRule="evenodd">
      <path d="M42.39 21.252c.305.15.56.353.764.58.025.025.025.025.05.025h.026l5.856-2.496c.025-.024.05-.05.05-.074 0-.025 0-.05-.025-.076l-5.473-5.42c-.025-.025-.05-.025-.05-.025h-.026c-.024 0-.05.025-.05.075l-1.196 7.336c.025.026.05.076.076.076zm-12.144-4.916c.28.43.458.933.51 1.437 0 .025.024.05.05.076l8.707 3.705h.025c.026 0 .05 0 .05-.026.256-.202.56-.354.892-.454.026 0 .05-.026.05-.076l1.427-8.85c0-.024 0-.05-.025-.074l-5.45-5.42c-.024-.026-.024-.026-.05-.026-.025 0-.05.025-.05.05l-6.136 9.53c-.026.05-.026.1 0 .126zm29.736 13.64l-9.343-9.28c-.027-.024-.052-.024-.052-.024h-.026l-6.34 2.698c-.025.025-.05.05-.05.075 0 .026.025.076.05.076l15.633 6.63h.025c.026 0 .05 0 .05-.024l.052-.05c.05 0 .05-.076 0-.1zm-1.553 1.51l-14.996-6.352h-.026c-.025 0-.05 0-.076.026-.407.554-1.018.907-1.73 1.008-.027 0-.078.025-.078.076L39.92 36.1c0 .026 0 .05.026.076.56.43.89 1.06.967 1.765 0 .052.026.077.077.077l9.063 1.89h.026c.024 0 .05 0 .05-.025l8.3-8.243c.025-.027.025-.052.025-.077s0-.05-.026-.076zm-19.86-8.42l-8.197-3.478h-.025c-.026 0-.05.025-.077.05-.56.858-1.5 1.362-2.52 1.362-.152 0-.305-.025-.483-.05h-.025c-.026 0-.05.025-.077.05l-6.747 10.462c-.025.025-.025.076 0 .1.026.026.05.026.077.026h.025l18-7.69c.026-.024.05-.05.05-.074v-.227c0-.152.026-.303.052-.43 0-.05-.026-.075-.05-.1zm9.88 18.304l-7.97-1.64h-.025c-.025 0-.05.026-.076.026-.307.378-.69.68-1.147.857-.026 0-.05.05-.05.076l-1.91 11.747c0 .05.025.076.05.1h.05c.027 0 .052 0 .052-.024l11.05-10.967c.025-.025.025-.05.025-.075 0-.075-.025-.1-.05-.1zm-11.127-.807c-.763-.302-1.323-.983-1.527-1.765 0-.025-.026-.05-.076-.075l-14.767-3.05h-.025c-.026 0-.05.024-.077.05-.075.126-.126.227-.202.327-.026.026-.026.076 0 .1L34.09 55.614c.026.026.026.026.05.026.026 0 .052 0 .052-.027l.815-.806c0-.025.025-.025.025-.05l2.29-14.118c.052 0 .052-.052 0-.077zm-16.064-6.68c0 .05.024.075.075.075l14.64 3.025H36c.025 0 .05-.025.076-.05.433-.757 1.197-1.26 2.062-1.31.05 0 .077-.026.077-.077l1.578-9.706c0-.025 0-.075-.05-.075-.103-.076-.205-.152-.332-.278-.024-.025-.05-.025-.05-.025h-.025l-18.102 7.74c-.05.025-.05.05-.05.1.025.202.076.38.076.58zm-6.137 2.445c-.077-.1-.153-.202-.23-.328-.025-.025-.05-.05-.076-.05h-.025l-6.314 2.697c-.025 0-.05.025-.05.05 0 .026 0 .05.025.076l3.08 3.05c.026.026.05.026.05.026.026 0 .052-.026.077-.052l3.488-5.42s0-.025-.025-.05zm4.175.983c-.025-.024-.05-.05-.076-.05h-.026c-.458.202-.916.303-1.4.303-.382 0-.738-.05-1.12-.176h-.026c-.025 0-.05.025-.076.05l-3.666 5.697-.026.026c-.025.025-.025.075 0 .1l16.855 16.715c.025.025.05.025.05.025.026 0 .05 0 .05-.025l2.955-2.95c.025-.025.025-.075 0-.1L19.298 37.31zm-2.368-6.58c.026.026.05.052.077.052h.025c.255-.05.535-.1.79-.1.28 0 .585.05.865.125h.026c.025 0 .05-.025.076-.05l6.822-10.59c.026-.024.026-.075 0-.1-.535-.554-.84-1.285-.84-2.067 0-.227.025-.454.076-.68 0-.05-.025-.076-.05-.102-.866-.378-8.53-3.605-8.53-3.63h-.025c-.025 0-.05 0-.05.025L9.7 20.067c-.025.025-.025.076 0 .1l7.23 10.564zm.74-18.453s7.738 3.278 8.07 3.43h.025c.025 0 .025 0 .05-.026.535-.428 1.223-.68 1.91-.68.33 0 .662.05.993.15h.026c.025 0 .05-.024.076-.05l6.288-9.755c.026-.026.026-.076 0-.1l-5.22-5.17C29.865.05 29.865.05 29.84.05c-.025 0-.05 0-.05.026l-12.12 12.05c-.025.025-.025.05-.025.076-.025.05 0 .05.026.075zM14.664 32.57c.025 0 .05-.024.076-.05.154-.302.383-.58.612-.83.025-.026.025-.077 0-.102-.076-.1-6.976-10.084-6.976-10.11-.025-.024-.025-.024-.076-.05-.026 0-.05 0-.05.026L.203 29.42c-.026.025-.026.05-.026.076 0 .025.026.05.077.05l14.41 3.025c-.026 0-.026 0 0 0zm-.662 1.74c0-.05-.026-.075-.077-.075l-12.5-2.596H1.4c-.025 0-.05.024-.076.05-.026.024 0 .075.025.1l5.575 5.546c.025.025.05.025.05.025h.026l6.926-2.948c.05-.05.077-.076.077-.1zM121.95 15.1h4.074v26.27h-4.074V15.1zm-41.677 7.413c-2.19 0-3.946.832-5.295 2.47l-.127-2.143h-3.818v18.505h4.073v-13.16c.815-1.513 2.037-2.27 3.666-2.27 1.122 0 1.936.278 2.445.858.51.555.74 1.437.74 2.597v11.975h4.072V29.118c-.05-4.387-1.96-6.605-5.754-6.605zm17.593 0c-1.553 0-2.953.403-4.226 1.21-1.273.806-2.24 1.94-2.954 3.403-.687 1.462-1.044 3.1-1.044 4.94v.505c0 2.75.815 4.968 2.42 6.632 1.603 1.664 3.69 2.495 6.288 2.495 1.502 0 2.877-.302 4.1-.907 1.22-.605 2.188-1.462 2.9-2.572l-2.19-2.142c-1.17 1.537-2.697 2.32-4.556 2.32-1.324 0-2.444-.455-3.31-1.337-.89-.884-1.374-2.094-1.502-3.63h11.864v-1.665c0-2.95-.687-5.22-2.01-6.832-1.4-1.614-3.31-2.42-5.78-2.42zm3.717 7.865h-7.765c.178-1.437.636-2.546 1.324-3.328.687-.806 1.604-1.184 2.724-1.184s2.01.352 2.648 1.058c.636.706.993 1.765 1.094 3.152v.302h-.025zm13.24 7.412c-.28-.303-.41-.832-.41-1.538V25.916h3.21V22.84h-3.21v-4.487h-4.072v4.487h-2.978v3.076h2.98v10.487c0 3.53 1.577 5.294 4.71 5.294.865 0 1.756-.126 2.698-.403v-3.227c-.484.126-.968.177-1.426.177-.738.025-1.222-.126-1.502-.454zm17.515-14.924h4.073V41.37h-4.072V22.866zm27.19 12.554l-3.844-12.554h-4.404l6.39 18.403-.586 1.587c-.305.908-.712 1.538-1.247 1.916-.51.378-1.3.58-2.317.58l-.764-.05v3.226c.713.2 1.375.302 1.96.302 2.648 0 4.532-1.563 5.653-4.664l7.23-21.302h-4.354L159.53 35.42zm-15.122-19.008c-1.12 1.11-1.68 2.697-1.68 4.764v1.69h-2.776v3.075h2.775v15.43h4.074V25.94h3.69v-3.074h-3.69v-1.64c0-2.04.966-3.05 2.927-3.05.585 0 1.12.05 1.553.127l.102-3.253c-.815-.2-1.554-.302-2.292-.302-1.986-.025-3.564.555-4.684 1.664zm-7.995-1.69v3.63h-4.072v-3.63h4.073z" />
    </g>
  </svg>;

NetlifyBadge.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

NetlifyBadge.defaultProps = {
  fill: theme.colors.lightGray,
  width: "168",
  height: "60",
  viewBox: "0 0 168 60",
};

export const GatsbyBadge = props =>
  <svg
    fill={props.fill}
    width={props.width}
    height={props.height}
    viewBox={props.viewBox}
    enableBackground={`new ${props.viewBox}`}
    xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="gatsbyjs" fill="#744C9E" fillRule="nonzero">
        <path d="M572,0.644 C256.449,0.644 0.644,256.448 0.644,572 C0.644,887.553 256.45,1143.356 572,1143.356 C887.553,1143.356 1143.356,887.552 1143.356,572 C1143.356,256.448 887.553,0.644 572,0.644 Z M123.414,577.956 L566.043,1020.586 C322.989,1017.418 126.581,821.01 123.414,577.956 Z M672.417,1009.37 L134.63,471.583 C180.232,272.142 358.734,123.339 572,123.339 C721.077,123.339 853.147,196.066 934.734,307.955 L872.614,362.767 C806.433,267.859 696.478,205.746 572,205.746 C413.515,205.746 278.553,306.414 227.54,447.291 L696.71,916.461 C810.648,875.201 898.276,779.021 927.624,659.901 L733.152,659.901 L733.152,572.001 L938.254,572.001 L938.254,571.999 L1020.661,571.999 L1020.661,572 C1020.661,785.266 871.859,963.768 672.417,1009.37 Z" />
      </g>
    </g>
  </svg>;

GatsbyBadge.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

GatsbyBadge.defaultProps = {
  fill: theme.colors.lightGray,
  width: "120",
  height: "120",
  viewBox: "0 0 120 120",
};

export default Icon;
