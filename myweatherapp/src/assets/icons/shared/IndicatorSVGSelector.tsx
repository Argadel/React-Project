import React from 'react';

interface Props{
    id: string;
}

export const IndicatorSVGSelector = ({id}: Props) => {
    switch (id) {
        case "temp":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    className="icon"
                    viewBox="0 0 1024 1024"
                >
                    <path
                        fill="#5FCEFF"
                        d="M440.277 390.185v236.408l-83.151 60.802-33.903 89.452 41.998 137.758 84.312 59.814 101.04 10.87 94.271-53.395s50.17-82.212 51.633-88.225c1.464-6.013-3.5-108.544-5.7-114.165s-25.115-62.95-25.115-62.95l-72.81-51.15.129-218.988"
                    ></path>
                    <path fill="#FFB578" d="M432.877 310.263h160.1v66.972h-160.1z"></path>
                    <path fill="#FF4893" d="M440.277 233.537h143.861v66.972h-143.86z"></path>
                    <path
                        fill="#4F46A3"
                        d="M512.911 1007.651c-116.943 0-212.082-95.14-212.082-212.083 0-77.224 42.592-148.588 109.653-185.67V117.794c0-56.496 45.95-102.46 102.43-102.46S615.34 61.293 615.34 117.792v492.103c67.058 37.07 109.654 108.439 109.654 185.672 0 116.943-95.14 212.083-212.083 212.083zm0-947.562c-31.8 0-57.672 25.885-57.672 57.704v505.814a22.385 22.385 0 01-12.922 20.284c-58.762 27.391-96.732 86.927-96.732 151.677 0 92.263 75.063 167.326 167.326 167.326s167.326-75.06 167.326-167.326c0-64.762-37.966-124.301-96.725-151.677a22.369 22.369 0 01-12.929-20.284V117.793c0-31.819-25.872-57.704-57.672-57.704z"
                    ></path>
                    <path
                        fill="#4F46A3"
                        d="M512.911 933.77c-74.194 0-134.558-60.376-134.558-134.589 0-52.055 30.518-99.935 77.75-121.971a22.378 22.378 0 1118.925 40.562c-31.54 14.715-51.918 46.671-51.918 81.412 0 49.533 40.284 89.833 89.801 89.833s89.801-40.297 89.801-89.833a22.378 22.378 0 1144.757 0c0 74.21-60.364 134.587-134.558 134.587zm0-754.596h-80.05a22.378 22.378 0 110-44.757h80.05a22.378 22.378 0 110 44.757zm79.923 76.725H432.86a22.378 22.378 0 110-44.756h159.973a22.378 22.378 0 110 44.756zm0 76.726H432.86a22.378 22.378 0 110-44.757h159.973a22.378 22.378 0 110 44.757zm0 76.726H432.86a22.378 22.378 0 110-44.757h159.973a22.378 22.378 0 110 44.757z"
                    ></path>
                </svg>
            );

        case "precipitation":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <path
                        fill="#93E6FF"
                        d="M186.787 52.001c5.053-5.416 13.657-5.416 18.71 0 34.57 37.054 153.117 172.641 153.117 289.511 0 89.73-72.741 162.472-162.472 162.472S33.67 431.242 33.67 341.511c0-116.869 118.547-252.456 153.117-289.51z"
                    ></path>
                    <g fill="#59D8FF">
                        <path
                            d="M281.653 461.228c-89.73 0-162.472-72.741-162.472-162.472 0-80.265 55.903-169.316 102.13-229.255a783.357 783.357 0 00-15.774-17.455c-5.071-5.436-13.68-5.479-18.752-.044C152.215 89.058 33.67 224.644 33.67 341.511c0 89.73 72.741 162.472 162.472 162.472 43.551 0 83.009-17.233 112.181-45.13-8.697 1.44-17.565 2.375-26.67 2.375z"></path>
                        <path
                            d="M358.614 341.511c0-82.697-59.341-174.721-106.298-234.622-21.919 38.614-39.071 81.971-39.071 123.457 0 78.932 63.269 143.235 141.741 145.186 2.34-10.977 3.628-22.344 3.628-34.021z"></path>
                    </g>
                    <path
                        fill="#D4F5FF"
                        d="M349.148 18.143c5.072-5.595 13.859-5.595 18.931 0 28.29 31.199 110.251 128.788 110.251 212.203 0 66.117-53.599 119.716-119.716 119.716s-119.716-53.599-119.716-119.716c0-83.415 81.96-181.004 110.25-212.203z"
                    ></path>
                    <path
                        fill="#BAEFFF"
                        d="M435.574 307.307c-66.117 0-119.716-53.599-119.716-119.716 0-53.004 33.091-111.709 64.479-155.489a625.803 625.803 0 00-12.253-13.945c-5.085-5.612-13.856-5.617-18.942-.006-28.296 31.206-110.245 128.787-110.245 212.196 0 66.117 53.599 119.716 119.716 119.716 37.34 0 70.672-17.107 92.626-43.896-5.138.673-10.342 1.14-15.665 1.14z"
                    ></path>
                    <path
                        d="M486.347 230.347c0-43.479-20.623-95.141-61.296-153.551-29.974-43.046-59.484-73.145-60.726-74.405a8.021 8.021 0 00-11.422-.001c-1.242 1.26-30.752 31.36-60.726 74.405-8.962 12.869-16.946 25.41-23.955 37.609-34.787-46.084-66.08-77.52-66.411-77.852a8.015 8.015 0 00-11.336.001c-.412.41-41.576 41.775-82.123 99.393-54.874 77.978-82.697 147.14-82.697 205.565 0 94.007 76.48 170.489 170.489 170.489 88.29 0 161.442-67.119 169.705-154.13 67.077-3.763 120.498-59.519 120.498-127.523zm-290.205 265.62c-85.167 0-154.455-69.288-154.455-154.455 0-68.511 43.302-144.469 79.627-196.128 30.982-44.06 62.314-78.409 74.828-91.618 11.011 11.62 36.584 39.599 63.624 76.105-19.192 37.028-28.885 70.675-28.885 100.476 0 67.451 52.556 122.852 118.868 127.421-8.141 78.128-74.102 138.199-153.607 138.199zm162.472-153.921c-61.592 0-111.699-50.108-111.699-111.699 0-83.897 88.161-185.121 111.699-210.645 23.538 25.524 111.699 126.747 111.699 210.645 0 61.591-50.107 111.699-111.699 111.699z"></path>
                    <path
                        d="M319.762 376.712a8.019 8.019 0 00-10.235 4.877c-14.039 39.593-48.267 69.388-89.328 77.757a8.017 8.017 0 103.202 15.71c46.54-9.485 85.332-43.247 101.238-88.109a8.018 8.018 0 00-4.877-10.235zM188.121 461.498a120.508 120.508 0 01-16.031-2.151 8.017 8.017 0 10-3.201 15.709 136.486 136.486 0 0018.175 2.439 8.018 8.018 0 008.529-7.47 8.019 8.019 0 00-7.472-8.527zM444.125 222.33a8.017 8.017 0 00-8.017 8.017c0 42.731-34.764 77.495-77.495 77.495a8.017 8.017 0 000 16.034c51.572 0 93.528-41.956 93.528-93.528a8.015 8.015 0 00-8.016-8.018z"></path>
                </svg>
            )

        case "pressure":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    version="1.1"
                    viewBox="0 0 220 225.168"
                    xmlSpace="preserve"
                >
                    <path
                        fill="#5CB0FF"
                        d="M103.962 177.668c-.364 0-.723.012-1.079.028-1.105.066-2.16-.348-2.949-1.102s-1.238-1.8-1.238-2.894c0-15.747-13.531-28.532-30.164-28.532-13.227 0-24.785 8-28.77 19.906-.594 1.762-2.355 2.922-4.172 2.711a26.219 26.219 0 00-2.488-.117C19.262 167.668 8 178.77 8 192.418c0 14.008 11.934 25.274 26.192 24.727.207-.016.433-.004.652.023h69.875c.098-.012.195-.02.293-.027 10.649-.54 18.988-9.203 18.988-19.723 0-10.89-8.988-19.75-20.038-19.75z"
                    ></path>
                    <path
                        fill="#D0E8FF"
                        d="M114.989 105.141c.097.008.199.016.297.027h69.882a3.611 3.611 0 01.641-.023c14.2.621 26.188-10.719 26.192-24.727 0-13.648-11.262-24.75-25.102-24.75-.84 0-1.672.04-2.488.118-1.797.156-3.582-.942-4.172-2.711-3.985-11.907-15.543-19.907-28.77-19.907-16.633 0-30.164 12.786-30.164 28.5 0 1.094-.45 2.157-1.238 2.91-.793.755-1.863 1.173-2.95 1.118a24.55 24.55 0 00-1.078-.027C104.99 65.669 96 74.528 96 85.419c0 10.519 8.34 19.183 18.989 19.722z"
                    ></path>
                    <path
                        fill="#1C71DA"
                        d="M106.481 169.778c-2.035-18.305-18.277-32.61-37.95-32.61-15.597 0-29.39 8.926-35.257 22.5h-.172c-18.254 0-33.101 14.692-33.101 32.75 0 18.059 14.847 32.75 33.101 32.75.317 0 .633-.004.945-.011.106.007.215.011.32.011h70.856c.246 0 .489-.023.727-.07 14.652-1.016 26.05-13.074 26.05-27.68 0-14.46-11.234-26.375-25.519-27.64zm-1.469 47.363a7.434 7.434 0 00-.293.027H34.844a3.345 3.345 0 00-.652-.023c-14.258.547-26.191-10.719-26.191-24.727 0-13.648 11.261-24.75 25.101-24.75.84 0 1.668.04 2.488.118 1.817.21 3.579-.95 4.172-2.711 3.985-11.907 15.543-19.907 28.77-19.907 16.633 0 30.164 12.786 30.164 28.532 0 1.093.45 2.14 1.238 2.894s1.844 1.168 2.95 1.102a24.55 24.55 0 011.078-.028c11.05 0 20.039 8.86 20.039 19.75 0 10.52-8.34 19.184-18.989 19.723zM114.028 113.098c.246.047.492.07.746.07h70.86c.105 0 .214-.004.32-.011.312.007.629.011.945.011 18.254 0 33.102-14.691 33.102-32.75 0-18.058-14.848-32.75-33.102-32.75h-.172c-5.867-13.574-19.66-22.5-35.258-22.5-19.66 0-35.898 14.293-37.945 32.61-14.285 1.265-25.523 13.18-25.523 27.64 0 14.602 11.386 26.657 26.027 27.68zm2.012-47.43c.363 0 .722.012 1.078.028 1.086.054 2.156-.364 2.949-1.118a4.042 4.042 0 001.238-2.91c0-15.715 13.531-28.5 30.164-28.5 13.227 0 24.786 8 28.77 19.906.59 1.77 2.375 2.868 4.172 2.711a26.157 26.157 0 012.488-.117c13.84 0 25.102 11.102 25.102 24.75-.004 14.008-11.993 25.348-26.192 24.727-.059-.004-.12-.004-.18-.004-.156 0-.308.008-.46.027h-69.883c-.098-.012-.2-.02-.297-.027C104.34 104.6 96 95.938 96 85.418c0-10.89 8.988-19.75 20.039-19.75zM70.84 112.16l-39.27 5.215a3.998 3.998 0 00-3.437 4.492 3.998 3.998 0 004.493 3.438l43.777-5.813a4.001 4.001 0 003.34-4.992L68.469 72.098a4.007 4.007 0 00-4.894-2.84 4.004 4.004 0 00-2.84 4.895L70.84 112.16z"
                    ></path>
                    <path
                        fill="#1C71DA"
                        d="M3.997 109.34c.175 0 .351-.012.53-.035l43.782-5.813a4.001 4.001 0 003.34-4.992L40.376 56.098c-.567-2.137-2.758-3.39-4.895-2.84a4.004 4.004 0 00-2.84 4.895L42.747 96.16l-39.274 5.214a3.998 3.998 0 00-3.437 4.493 3.998 3.998 0 003.96 3.472zM141.254 146.348l39.274-5.215a3.998 3.998 0 003.437-4.492 3.997 3.997 0 00-4.492-3.437l-43.781 5.812a4.001 4.001 0 00-3.34 4.992l11.273 42.399a3.999 3.999 0 004.895 2.84 4.004 4.004 0 002.84-4.895l-10.106-38.004z"
                    ></path>
                    <path
                        fill="#1C71DA"
                        d="M207.473 157.203l-43.781 5.813a4.001 4.001 0 00-3.34 4.992l11.274 42.399a3.999 3.999 0 004.894 2.84 4.004 4.004 0 002.84-4.895l-10.106-38.004 39.274-5.215a3.998 3.998 0 003.437-4.492c-.289-2.191-2.3-3.719-4.492-3.438z"
                    ></path>
                    <path
                        fill="#FF5D5D"
                        d="M184.386 194a3.998 3.998 0 01-2.828-6.828L195.7 173.03a3.998 3.998 0 015.657 0 3.998 3.998 0 010 5.656l-14.143 14.142a3.987 3.987 0 01-2.828 1.172z"
                    ></path>
                    <path
                        fill="#FF5D5D"
                        d="M198.529 194.001a3.985 3.985 0 01-2.829-1.172l-14.142-14.142a3.998 3.998 0 010-5.657 3.998 3.998 0 015.656 0l14.143 14.143a3.998 3.998 0 01-2.828 6.828z"
                    ></path>
                    <path
                        fill="#00D40B"
                        d="M154.386 84c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14zm0-20c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"
                    ></path>
                    <path
                        fill="#FFC504"
                        d="M15.7 30.628a4 4 0 01-2.829-1.172L1.558 18.142a3.998 3.998 0 010-5.657L12.87 1.172a3.998 3.998 0 015.656 0l11.314 11.313a3.998 3.998 0 010 5.657L18.527 29.456a4 4 0 01-2.828 1.172zm-5.658-15.315l5.657 5.658 5.658-5.657-5.658-5.657-5.657 5.656z"
                    ></path>
                </svg>
            )

        case "wind":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    className="icon"
                    viewBox="0 0 1024 1024"
                >
                    <path
                        fill="#4F46A3"
                        d="M564.352 386.979H71.006a22.378 22.378 0 110-44.757h493.346c63.075 0 114.395-51.32 114.395-114.398s-51.32-114.398-114.395-114.398a22.378 22.378 0 110-44.757c87.755 0 159.152 71.397 159.152 159.155S652.107 386.98 564.352 386.98z"
                    ></path>
                    <path
                        fill="#4F46A3"
                        d="M815.917 498.79H322.57a22.378 22.378 0 110-44.756h493.346c63.078 0 114.398-51.32 114.398-114.405 0-63.078-51.32-114.398-114.398-114.398a22.378 22.378 0 110-44.756c87.758 0 159.154 71.396 159.154 159.154.004 87.762-71.393 159.161-159.154 159.161zM704.11 954.052a22.378 22.378 0 110-44.757c63.079 0 114.398-51.32 114.398-114.401 0-63.078-51.32-114.398-114.398-114.398H210.762a22.378 22.378 0 110-44.757h493.346c87.758 0 159.155 71.397 159.155 159.155S791.87 954.052 704.11 954.052z"
                    ></path>
                    <path
                        fill="#5FCEFF"
                        d="M572.226 313.45H78.88a22.378 22.378 0 110-44.757h493.346a22.378 22.378 0 110 44.757z"
                    ></path>
                    <path
                        fill="#FF4893"
                        d="M815.191 588.384H321.845a22.378 22.378 0 110-44.757h493.346a22.378 22.378 0 110 44.757z"
                    ></path>
                </svg>
            )

        default:
            return null;
    }
}

export default IndicatorSVGSelector;