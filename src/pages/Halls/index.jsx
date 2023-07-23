import React, { useEffect, useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'

import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { HALLS } from '../../helpers/constants';

const Halls = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [hallId, setHallId] = useState();
  const [hall, setHall] = useState();
  const [halls, setHalls] = useState(HALLS);

  useEffect(() => {
    setHall(halls.find(hall => hall.id === hallId))
  }, [hallId]);

  const handleSubmit = (id, name) => {    
    const newHalls = halls.map(el => {
      if (el.id === id) {
        el.name = name;
        return el;
      } else {
        return el;
      }
    })

    setHalls(newHalls);
    setEditOpen(false);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6">
      <header className="mb-6 text-3xl font-semibold">
        Halls List
      </header>

      <div className="w-full shadow-lg rounded">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-slate-300 text-slate-700 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-slate-300 text-slate-700 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Place
                </th>
                <th className="px-6 bg-slate-300 text-slate-700 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {halls.map(hall => {
                return (
                  <tr key={hall.id}>
                    <th className="px-6 py-4 border border-solid border-slate-300 align-middle text-xs whitespace-nowrap text-left text-slate-700">
                      {hall.name}
                    </th>
                    <td className="px-6 py-4 border border-solid border-slate-300 align-middle text-xs whitespace-nowrap text-left text-slate-700">
                      {hall.place}
                    </td>
                    <td className="px-6 py-4 border border-solid border-slate-300 align-middle text-xs whitespace-nowrap text-left text-slate-700">
                      <div className="flex space-x-2">
                        <PencilIcon 
                          className="h-4 w-4 text-blue-500 cursor-pointor"  
                          onClick={() => {
                            setEditOpen(true);
                            setHallId(hall.id);
                          }}
                        />
                        <TrashIcon className="h-4 w-4 text-rose-500 cursor-pointor" onClick={() => setOpen(true)} />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteModal open={open} setOpen={setOpen} />
      <EditModal editOpen={editOpen} setEditOpen={setEditOpen} hall={hall} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Halls;
