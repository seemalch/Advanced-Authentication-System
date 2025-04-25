import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utilis/date";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md' >
			<h2 className='text-3xl font-bold mb-6 text-center text-gray-200'>
				Dashboard
			</h2>

			<div className='space-y-6'>
				<motion.div
					className='p-4 bg-gray-1000 bg-opacity-50 rounded-lg border border-gray-500'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					<h3 className='text-xl font-semibold text-purple-500 mb-3'>Profile Information</h3>
					<p className='text-gray-200'>Name: {user.name}</p>
					<p className='text-gray-200'>Email: {user.email}</p>
				</motion.div>
				<motion.div
					className='p-4 bg-gray-1000 bg-opacity-50 rounded-lg border border-gray-500'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h3 className='text-xl font-semibold text-purple-400 mb-3'>Account Activity</h3>
					<p className='text-gray-200'>
						<span className='font-bold'>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className='text-gray-200'>
						<span className='font-bold'>Last Login: </span>

						{formatDate(user.lastLogin)}
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold rounded-lg shadow-lg hover:from-indigo-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
					>
					Logout
				</motion.button>
			</motion.div>
		</motion.div>
	);
};
export default DashboardPage;