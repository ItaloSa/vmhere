import React, { useContext, useEffect, useState } from 'react';
import { FaPlay, FaSave, FaStop, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Table, TableBody, TableHead, TableItem, TableRow } from '../components/Table';
import ActionBtn from '../components/ActionBtn';
import { ApiContext } from '../index';
import Loader from '../components/Loader';

const VmList = () => {
  const [vms, setVms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const api = useContext(ApiContext);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await fetchData();
      setLoading(false);
    }
    getData();
  }, []);

  const fetchData = async () => {
    const { data } = await api.get('/vms');
    if (data.code === 'OK') {
      setVms(data.data);
    }
  };

  const doAction = async (name, action) => {
    setLoading(true);
    const { data: result } = await api.post(`/vms/${name}/${action}`);
    if (result.code === 'OK') {
      toast.success(`VM ${action} successfully`);
    } else {
      toast.error(`VM error on ${action}. Try again later.`);
    }
    await fetchData();
    setLoading(false);
  };

  if (isLoading) return (<Loader />);

  return (
    <>
      {vms.length ? (
        <Table>
          <TableHead>
            <TableItem head>Name</TableItem>
            <TableItem head>State</TableItem>
            <TableItem head>OS</TableItem>
            <TableItem head>Memory</TableItem>
            <TableItem head>CPUs</TableItem>
            <TableItem head>Actions</TableItem>
          </TableHead>
          <TableBody>
            {vms.map((item, idx) => (
              <TableRow key={`vm-${idx}`}>
                <TableItem>{item.name}</TableItem>
                <TableItem>{item.state}</TableItem>
                <TableItem>{item.os}</TableItem>
                <TableItem>{item.memory}Gb</TableItem>
                <TableItem>{item.cpus}</TableItem>
                <TableItem flex>
                  {item.state === 'ON' ? (
                    <>
                      <ActionBtn icon={FaStop} onClick={() => doAction(item.name, 'stop')} />
                      <ActionBtn icon={FaSave} onClick={() => doAction(item.name, 'save')} />
                    </>
                  ) :
                    <ActionBtn icon={FaPlay} onClick={() => doAction(item.name, 'start')} />
                  }
                  <ActionBtn icon={FaTrash} onClick={() => doAction(item.name, 'remove')} />
                </TableItem>
              </TableRow>
            ))}
          </TableBody>
        </Table>) : null}
    </>
  );
};

export default VmList;
