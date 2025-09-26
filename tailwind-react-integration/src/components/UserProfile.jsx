function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-md mx-auto my-10 rounded-lg shadow-lg">
      <img 
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" 
        src="Richy.jpeg" 
        alt="User Profile" 
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4">
        John Doe
      </h1>
      <p className="text-gray-600 sm:text-sm md:text-base text-center leading-relaxed">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}
export default UserProfile;