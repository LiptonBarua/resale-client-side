import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hookes/useAdmin';
import useBuyer from '../../Hookes/useBuyer';
import useSaller from '../../Hookes/useSaller';
import Navber from '../../Pages/Share/Navbar/Navber';



const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSaller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">

            {
              isBuyer &&  <li><Link to='/dashboard'>My Orders</Link></li>
            }
            {
              isAdmin && <>

              <li><Link to='/dashboard/allSeller'>All Users</Link></li>
               
              </>
            }
            {
              isSeller && <>
                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                <li><Link to='/dashboard/myProducts'>Products</Link></li>
              </>
            }

          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;