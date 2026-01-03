import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import { User, Mail, Image as ImageIcon, Save, Edit3 } from 'lucide-react';

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        displayName: user?.displayName || '',
        photoURL: user?.photoURL || ''
    });

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUser({
                displayName: formData.displayName,
                photoURL: formData.photoURL
            });
            toast.success("Profile updated successfully!");
            setIsEditing(false);
        } catch (error) {
            toast.error("Failed to update profile");
            console.error(error);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto animate-in fade-in duration-500">
            {/* --- Header Section --- */}
            <div className="relative mb-8">
                <div className="h-48 md:h-64 w-full bg-linear-to-r from-blue-600 to-indigo-700 rounded-[2.5rem]"></div>
                <div className="absolute -bottom-12 left-10 flex items-end gap-6">
                    <div className="relative">
                        <img 
                            src={user?.photoURL || "https://via.placeholder.com/150"} 
                            alt="Profile" 
                            className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border-8 border-white object-cover shadow-xl"
                        />
                        <div className="absolute bottom-2 right-2 p-2 bg-emerald-500 border-4 border-white rounded-full"></div>
                    </div>
                    <div className="mb-4 hidden sm:block">
                        <h1 className="text-3xl font-black text-white drop-shadow-md">{user?.displayName || 'User Name'}</h1>
                        <p className="text-blue-100 font-bold opacity-90 uppercase tracking-widest text-xs">Verified Member</p>
                    </div>
                </div>
            </div>

            {/* --- Content Section --- */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
              
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-fit">
                    <h3 className="text-xl font-black mb-6  uppercase tracking-tighter">Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-50 rounded-2xl text-slate-400"><Mail size={20}/></div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</p>
                                <p className="font-bold text-slate-700">{user?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-50 rounded-2xl text-slate-400"><User size={20}/></div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</p>
                                <p className="font-bold text-slate-700">{user?.displayName || 'Not Set'}</p>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className="w-full mt-8 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase  tracking-widest text-xs hover:bg-slate-800 transition-all"
                    >
                        {isEditing ? 'Cancel Editing' : <><Edit3 size={16}/> Edit Profile</>}
                    </button>
                </div>

                
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-black mb-8  uppercase tracking-tighter">
                            {isEditing ? 'Update Your Profile' : 'Profile Settings'}
                        </h3>

                        <form onSubmit={handleUpdate} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="ml-2 text-[10px] font-black uppercase text-slate-400 tracking-widest">Display Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18}/>
                                        <input 
                                            disabled={!isEditing}
                                            type="text" 
                                            value={formData.displayName}
                                            onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="ml-2 text-[10px] font-black uppercase text-slate-400 tracking-widest">Profile Photo URL</label>
                                    <div className="relative">
                                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18}/>
                                        <input 
                                            disabled={!isEditing}
                                            type="text" 
                                            value={formData.photoURL}
                                            onChange={(e) => setFormData({...formData, photoURL: e.target.value})}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
                                            placeholder="https://example.com/photo.jpg"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-xs text-slate-400 font-medium mb-6">
                                    <span className="text-amber-500 font-bold">Note:</span> Your email address cannot be changed as it is linked to your authentication account.
                                </p>
                                
                                {isEditing && (
                                    <button 
                                        type="submit"
                                        className="flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase  tracking-widest text-xs hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                                    >
                                        <Save size={18}/> Save Changes
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;