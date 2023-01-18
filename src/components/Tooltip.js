import React from "react";
import { createPopper } from "@popperjs/core";
import { GrTooltip } from "react-icons/gr";

const Tooltip = () => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom"
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };

  // const color = "green";

  return (
    <div className="flex flex-wrap">
      <div className="w-full text-center">
        <button
          className={`text-white font-bold uppercase text-sm py-3 rounded  ease-linear transition-all duration-150`}
          type="button"
          onMouseEnter={() => {
            openPopover();
          }}
          onMouseLeave={() => {
            closePopover();
          }}
          ref={btnRef}>
          <GrTooltip className="w-2" />
        </button>
        <div
          className={`${popoverShow ? "" : "hidden"} 
            bg-white shadow-md w-full border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg`}
          ref={popoverRef}>
          <div>
            <div className="text-gray-600 p-3">
              If your account is linked to an email address that you are no longer using log in and
              change it
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
