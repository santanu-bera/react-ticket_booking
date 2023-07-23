import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const BookingModal = ({ open, setOpen, selectedShowtime, handleConfirmClick }) => {
  const [seatsCount, setSeatsCount] = useState(1);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="w-full">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Booking confirmation
                      </Dialog.Title>
                      <div className="mt-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-slate-500">Hall:</span>
                          <span>{selectedShowtime.hall?.name}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-slate-500">Place:</span>
                          <span>{selectedShowtime.hall?.place}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-slate-500">Time:</span>
                          <span>{selectedShowtime.time}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span className="font-semibold text-slate-500">Screen:</span>
                          <span>{selectedShowtime.screen}</span>
                        </div>

                        <div className="flex justify-between items-center mb-1 mt-4">
                          <span className="font-semibold text-slate-500">Enter seat count:</span>
                          <input
                            type="number"
                            step="1"
                            name="seatsCount"
                            autoComplete="off"
                            min="1"
                            value={seatsCount}
                            onChange={(e) => setSeatsCount(e.target.value)}
                            className="block w-1/4 rounded border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 sm:ml-3 sm:w-auto"
                    onClick={() => handleConfirmClick()}
                  >
                    Confirm booking
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default BookingModal;
