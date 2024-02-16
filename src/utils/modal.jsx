import React, { useState } from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

export default function Modal({ open, setOpen, jsonData }) {
  return (
    <div>
      <dialog
        open={open}
        class="p-8 mt-8 backdrop-blur-md bg-white/90 rounded z-50 "
      >
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <div class="text-[#874439]">Product Attributes</div>

            <button
              class="text-white p-1 px-3 rounded bg-slate-700"
              onClick={() => setOpen(false)}
            >
              close
            </button>
          </div>
          <div class="min-h-[400px] max-h-[calc(100vh-15rem)]  min-w-[300px] max-w-[300px] md:max-w-[100%] overflow-auto mt-2">
            <JsonView collapsed={false} src={jsonData} />
          </div>
        </div>
      </dialog>
    </div>
  );
}
