function Contact() {
  return (
    <div className=" text-white min-h-screen p-6 flex flex-col items-center pt-10 bg-gradient-to-b from-slate-800 via-rose-300 to-slate-400">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-100 mb-6 text-center max-w-md">
        I'm open to new opportunities, collaborations, and freelance work. Feel free to reach out!
      </p>

      <div className="space-y-4 text-gray-100 text-center">
        <p><strong>Email:</strong> <a href="mailto:srivastavasameer2002@gmail.com" className="text-blue-100 hover:text-green-500 underline">srivastavasameer2002@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/sam33r0" target="_blank" className="text-blue-100 hover:text-green-500 underline">github.com/sam33r0</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sameer-sri/" target="_blank" className="text-blue-100 underline hover:text-green-500">linkedin.com/in/sameer-sri</a></p>
      </div>
    </div>
  );
}

export default Contact;
