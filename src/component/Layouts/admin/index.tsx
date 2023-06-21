const AdminLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <main>
        <h1>Header</h1>
        <div>{children}</div>
        <h1>Footer</h1>
      </main>
    </div>
  );
};
export default AdminLayout;
