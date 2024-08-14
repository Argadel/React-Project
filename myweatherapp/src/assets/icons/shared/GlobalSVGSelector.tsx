import React from 'react';

interface Props{
    id: string;
}

export const GlobalSVGSelector = ({id}: Props) => {
    switch (id) {
        case "header-logo":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <g fill="#BFB61E">
                        <path
                            d="M258.373 448.122c-11.783 0-21.337 1.395-21.337 18.136 0 8.131 9.553 45.742 21.337 45.742 11.784 0 21.336-37.611 21.336-45.742 0-16.74-9.553-18.136-21.336-18.136zM352.653 422.86c-10.205 5.891-17.78 11.876-9.41 26.374 4.065 7.041 31.144 34.837 41.349 28.945 10.205-5.892-.328-43.241-4.393-50.282-8.37-14.497-17.341-10.929-27.546-5.037zM448.046 344.432c-14.498-8.37-20.483-.795-26.375 9.41-5.892 10.205-9.46 19.176 5.038 27.546 7.041 4.065 44.39 14.598 50.282 4.393 5.892-10.205-21.904-37.284-28.945-41.349zM465.07 238.225c-16.741 0-18.136 9.553-18.136 21.337 0 11.784 1.396 21.336 18.136 21.336 8.13 0 45.742-9.553 45.742-21.336 0-11.785-37.612-21.337-45.742-21.337zM426.71 137.735c-14.498 8.37-10.93 17.341-5.038 27.546 5.892 10.204 11.877 17.78 26.375 9.41 7.041-4.065 34.837-31.144 28.945-41.349-5.893-10.205-43.242.328-50.282 4.393zM164.092 422.86c-10.205-5.892-19.176-9.46-27.546 5.038-4.065 7.041-14.598 44.39-4.393 50.282 10.205 5.892 37.283-21.904 41.349-28.945 8.37-14.498.795-20.483-9.41-26.375zM424.226 259.561c0-45.799-18.564-87.263-48.577-117.276L141.097 376.837c30.013 30.013 71.477 48.578 117.276 48.578 91.598 0 165.853-74.256 165.853-165.854z"></path>
                    </g>
                    <g fill="#C6BA56">
                        <path
                            d="M164.11 96.239c-10.143 5.855-19.05 9.401-27.297-4.618-.082-.083-.165-.247-.248-.412-4.123-7.009-14.596-44.367-4.453-50.305 7.669-4.454 25.07 10.308 34.719 20.781 3.298 3.464 5.69 6.433 6.68 8.164 8.329 14.515.825 20.535-9.401 26.39zM279.729 52.861v.577c-.248 16.164-9.732 17.566-21.359 17.566-9.319 0-17.236-.907-20.122-9.483-.824-2.227-1.237-5.113-1.237-8.66 0-5.03 3.629-21.276 9.154-32.987 3.546-7.257 7.752-12.782 12.205-12.782 1.319 0 2.639.495 3.876 1.402 9.979 6.68 17.483 37.11 17.483 44.367zM95.085 165.264c-5.938 10.226-11.875 17.813-26.39 9.401-3.958-2.227-14.432-11.793-21.854-21.524-.082-.083-.165-.165-.165-.248-5.69-7.504-9.484-15.091-6.928-19.545 5.938-10.226 43.213.33 50.305 4.371 1.237.742 2.391 1.484 3.381 2.226 10.475 7.754 7.011 16 1.651 25.319zM69.85 259.524c0 11.546-1.32 21.03-17.236 21.359h-.907c-7.834 0-43.13-8.907-45.605-20.122H6.02c0-.412-.083-.824-.083-1.237 0-4.536 5.69-8.824 13.112-12.205 11.711-5.525 27.709-9.071 32.657-9.071 4.701 0 8.164.742 10.721 2.062 6.681 3.463 7.423 10.803 7.423 19.214zM68.7 344.432c-7.041 4.065-34.837 31.144-28.945 41.349 5.892 10.205 43.241-.328 50.281-4.393 14.498-8.37 10.93-17.341 5.038-27.546-5.891-10.205-11.877-17.78-26.374-9.41zM352.653 96.263c10.205 5.892 19.176 9.46 27.546-5.038 4.065-7.041 14.598-44.39 4.393-50.282-10.205-5.892-37.284 21.904-41.349 28.945-8.37 14.498-.795 20.483 9.41 26.375zM258.373 93.708c-91.598 0-165.853 74.255-165.853 165.853 0 45.799 18.563 87.262 48.577 117.276l234.552-234.552c-30.014-30.014-71.477-48.577-117.276-48.577z"></path>
                    </g>
                    <g fill="#EFE748">
                        <path
                            d="M252.408 440.964c-11.783 0-21.337 1.395-21.337 18.136 0 8.131 9.553 45.742 21.337 45.742s21.336-37.611 21.336-45.742c0-16.74-9.553-18.136-21.336-18.136zM346.688 415.702c-10.205 5.892-17.78 11.877-9.41 26.375 4.065 7.041 31.144 34.837 41.349 28.945 10.205-5.892-.328-43.241-4.393-50.282-8.37-14.498-17.341-10.93-27.546-5.038zM442.081 337.274c-14.498-8.37-20.483-.795-26.375 9.41-5.892 10.205-9.46 19.176 5.038 27.546 7.041 4.065 44.39 14.598 50.282 4.393 5.892-10.205-21.904-37.284-28.945-41.349zM459.105 231.066c-16.741 0-18.136 9.553-18.136 21.337 0 11.784 1.395 21.336 18.136 21.336 8.13 0 45.742-9.553 45.742-21.336-.001-11.784-37.612-21.337-45.742-21.337zM420.744 130.577c-14.497 8.37-10.93 17.341-5.038 27.546 5.892 10.205 11.877 17.78 26.375 9.41 7.041-4.065 34.837-31.144 28.945-41.349-5.892-10.205-43.241.327-50.282 4.393zM158.127 415.702c-10.205-5.892-19.176-9.46-27.546 5.038-4.065 7.041-14.598 44.39-4.392 50.282 10.205 5.892 37.283-21.904 41.349-28.945 8.369-14.499.794-20.483-9.411-26.375zM418.261 252.403c0-45.799-18.564-87.263-48.577-117.276L135.132 369.679c30.014 30.013 71.477 48.578 117.276 48.578 91.598 0 165.853-74.256 165.853-165.854z"></path>
                    </g>
                    <g fill="#FAF2AF">
                        <path
                            d="M158.09 89.065c-7.67 4.453-14.679 7.587-21.277 2.557-2.144-1.567-4.206-4.041-6.268-7.587-4.041-7.01-14.597-44.367-4.371-50.223 9.814-5.69 34.967 19.545 40.657 27.874.33.412.577.742.742 1.072 8.33 14.431.743 20.451-9.483 26.307zM273.709 45.687c0 .577 0 1.155-.083 1.65-.577 15.174-9.814 16.493-21.194 16.493-4.288 0-8.247-.165-11.628-1.237-.907-.247-1.732-.659-2.556-1.072-2.722-1.402-4.866-3.711-6.02-7.422-.083-.083 0-.083 0-.083-.742-2.227-1.155-5.03-1.155-8.329 0-4.865 3.464-20.452 8.824-32.08C243.113 6.597 247.072.99 251.278.165c.412-.082.742-.165 1.154-.165 3.547 0 6.927 3.463 9.814 8.494.99 1.649 1.897 3.464 2.804 5.443 5.278 11.545 8.659 26.967 8.659 31.75zM89.147 158.09c-5.937 10.226-11.875 17.813-26.39 9.484-2.969-1.732-9.648-7.505-15.916-14.432-.082-.083-.165-.165-.165-.248-8.577-9.401-16.246-20.864-12.865-26.719 5.855-10.226 43.213.33 50.222 4.371 5.195 3.051 8.164 6.185 9.401 9.401 2.228 5.69-.576 11.711-4.287 18.143zM63.83 252.432c0 11.793-1.402 21.277-18.142 21.277h-.248c-5.03-.083-20.122-3.382-31.503-8.577-2.886-1.402-5.608-2.804-7.835-4.371H6.02c-3.711-2.556-6.02-5.36-6.02-8.329 0-.33 0-.742.165-1.072.742-4.041 5.69-7.669 12.04-10.886 11.793-5.608 28.451-9.401 33.482-9.401 1.897 0 3.629.165 5.196.412 6.762.99 9.978 4.288 11.545 8.824.412 1.072.66 2.309.825 3.546.495 2.557.577 5.526.577 8.577zM84.034 374.237c-5.196 3.051-27.379 9.649-40.739 8.576-1.567-.083-2.969-.33-4.288-.742-2.392-.66-4.206-1.815-5.195-3.464-.908-1.567-1.072-3.629-.577-5.855 2.804-12.206 23.503-32.08 29.523-35.461 2.969-1.732 5.608-2.804 7.917-3.216 7.917-1.732 12.453 2.969 16.659 9.566.577.99 1.237 1.979 1.814 3.051 2.062 3.711 3.959 7.175 4.701 10.556 1.401 6.02-.496 11.628-9.815 16.989zM346.688 89.104c10.205 5.892 19.176 9.46 27.546-5.038 4.065-7.041 14.598-44.39 4.393-50.282-10.205-5.892-37.284 21.904-41.349 28.945-8.37 14.499-.795 20.484 9.41 26.375zM369.701 135.164l-.743.742-3.381 3.381-230.413 230.414a154.208 154.208 0 01-7.092-7.587 165.996 165.996 0 01-16.741-22.513c-15.668-25.318-24.74-55.171-24.74-87.168 0-91.621 74.221-165.842 165.842-165.842 29.936 0 58.057 7.917 82.385 21.936 12.782 7.257 24.492 16.246 34.883 26.637z"></path>
                    </g>
                </svg>
            );

        case "change_theme":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <path
                        fill="#B7E4F8"
                        d="M447.475 209.476c.349-3.327.525-6.669.525-10.01 0-52.934-43.066-96-96-96-5.533 0-11.031.472-16.444 1.408-8.831-20.988-23.043-39.124-41.578-52.929-22.207-16.538-48.617-25.279-76.378-25.279-70.579 0-128 57.421-128 128 0 4.806.269 9.608.803 14.373-22.705 3.855-43.566 14.808-59.834 31.63C10.856 221.053 0 247.901 0 276.266c0 59.992 48.808 108.8 108.8 108.8h313.6c49.405 0 89.6-40.195 89.6-89.6 0-40.083-26.957-74.986-64.525-85.99z"
                    ></path>
                    <path
                        fill="#93D6F4"
                        d="M447.475 209.476c.349-3.327.525-6.669.525-10.01 0-52.934-43.066-96-96-96-5.533 0-11.031.472-16.444 1.408-8.831-20.988-23.043-39.124-41.578-52.929-11.639-8.667-24.44-15.171-37.978-19.419v352.54h166.4c49.405 0 89.6-40.195 89.6-89.6 0-40.083-26.957-74.986-64.525-85.99z"
                    ></path>
                    <path
                        fill="#6FC8F1"
                        d="M380.388 307.526c-14.835-20.628-29.481-36.997-30.098-37.683L336 253.919l-14.29 15.924c-.616.687-15.263 17.056-30.098 37.683-32.412 45.07-32.412 64.691-32.412 71.14 0 42.348 34.452 76.8 76.8 76.8s76.8-34.452 76.8-76.8c0-6.448 0-26.07-32.412-71.14z"
                    ></path>
                    <path
                        fill="#4BBAED"
                        d="M336 455.466c42.348 0 76.8-34.452 76.8-76.8 0-6.449 0-26.07-32.412-71.14-14.835-20.628-29.481-36.997-30.098-37.683L336 253.919"
                    ></path>
                    <path
                        fill="#6FC8F1"
                        d="M210.788 363.511c-11.671-16.229-23.212-29.126-23.698-29.668l-14.29-15.924-14.29 15.924c-.485.541-12.027 13.44-23.698 29.668-11.167 15.528-26.012 38.415-26.012 57.823 0 35.29 28.71 64 64 64s64-28.71 64-64c0-19.408-14.845-42.295-26.012-57.823z"
                    ></path>
                    <path
                        fill="#4BBAED"
                        d="M172.8 485.334c35.29 0 64-28.71 64-64 0-19.407-14.845-42.294-26.012-57.821-11.671-16.229-23.212-29.126-23.698-29.668l-14.29-15.926"
                    ></path>
                </svg>
            )

        case "sun_weather":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <circle cx="256" cy="256" r="256" fill="#31BAFD"></circle>
                    <path
                        fill="#2B9ED8"
                        d="M282.672 510.621c120.082-12.433 215.518-107.866 227.95-227.95L377.289 149.337l-30.523 25.897-80.422-80.418-20.687 46.052 65.898 65.898-45.08 45.08-84.571-84.571-14.627 14.627 83.554 85.59-44.063 44.063-65.9-65.898-46.052 20.687 76.233 76.233-21.709 34.711 133.332 133.333z"
                    ></path>
                    <circle cx="256" cy="256" r="92.108" fill="#F9B54C"></circle>
                    <path
                        fill="#F4A200"
                        d="M256 163.895c-.193 0-.381.014-.574.014v184.182c.193.002.381.016.574.016 50.869 0 92.107-41.238 92.107-92.107S306.869 163.895 256 163.895z"
                    ></path>
                    <path fill="#F2D453" d="M245.657 94.815H266.344V140.867H245.657z"></path>
                    <path fill="#F4A200" d="M255.431 94.815H266.348V140.867H255.431z"></path>
                    <path fill="#F2D453" d="M245.657 371.14H266.344V417.192H245.657z"></path>
                    <g fill="#F4A200">
                        <path d="M255.431 371.14H266.348V417.192H255.431z"></path>
                        <path d="M371.14 245.657H417.192V266.344H371.14z"></path>
                    </g>
                    <path fill="#F2D453" d="M94.815 245.657H140.867V266.344H94.815z"></path>
                    <path
                        fill="#F4A200"
                        d="M343.359 135.274H364.046V181.326H343.359z"
                        transform="rotate(-134.999 353.703 158.302)"
                    ></path>
                    <g fill="#F2D453">
                        <path
                            d="M147.962 330.66H168.649V376.71200000000005H147.962z"
                            transform="rotate(-134.999 158.305 353.688)"
                        ></path>
                        <path
                            d="M135.277 147.952H181.32899999999998V168.639H135.277z"
                            transform="rotate(-134.999 158.303 158.297)"
                        ></path>
                    </g>
                    <path
                        fill="#F4A200"
                        d="M330.664 343.342H376.716V364.029H330.664z"
                        transform="rotate(-134.999 353.691 353.688)"
                    ></path>
                </svg>
            )

        case "close":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                >
                    <path
                        fill="#ea802a"
                        d="M41 43a2 2 0 01-1.41-.59L5.62 8.44a2 2 0 012.82-2.82l33.94 33.94A2 2 0 0141 43z"
                    ></path>
                    <path
                        fill="#ea802a"
                        d="M7 43a2 2 0 01-1.41-3.41L39.56 5.62a2 2 0 012.83 2.83L8.44 42.38A2 2 0 017 43z"
                    ></path>
                </svg>
            )

        default:
            return null;
    }
}

export default GlobalSVGSelector;