import { useEffect } from "react";
import { useAPIQuery } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { VariationsResponseType } from "../../shared/types/productType";
import { Table, Pagination } from "antd";

const Home = () => {
  const [searchParams] = useSearchParams();
  const productsQuery = useAPIQuery<VariationsResponseType>({
    url: "variations",
    params: {
      size: searchParams.get("size") || 10,
      page: searchParams.get("page") || 1,
    },
  });

  const dataSource = productsQuery.data?.items.map((item) => ({
    key: item.id,
    name: item.name,
    description: item.description,
    supplier: item.supplier,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
  ];

  useEffect(() => {
    searchParams.set("size", "10");
    searchParams.set("page", "1");
  }, [searchParams]);

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <Pagination
        defaultCurrent={1}
        total={productsQuery.data?.total_count || 0}
        onChange={(page) => {
          searchParams.set("page", page.toString());
          productsQuery.refetch();
        }}
        onShowSizeChange={(_, size) => {
          searchParams.set("size", size.toString());
          searchParams.set("page", "1");
          productsQuery.refetch();
        }}
      />
    </div>
  );
};

export default Home;
