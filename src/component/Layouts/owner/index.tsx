const OwnerLayout: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default OwnerLayout;
