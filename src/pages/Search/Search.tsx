import { useAPIQuery, useFilterProducts } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import { VariationsResponseType } from "../../shared/types/productType";
import { Table } from "antd";

const Search = () => {
  const [searchParams] = useSearchParams();
  const productsQuery = useAPIQuery<VariationsResponseType>({
    url: "variations",
  });

  const foundProducts = useFilterProducts(
    productsQuery.data?.items || [],
    searchParams.get("query") || ""
  );

  console.log(foundProducts.length);

  const dataSource = foundProducts.map((item, index) => ({
    key: item.id,
    id: index,
    name: item.name,
    description: item.description,
    supplier: item.supplier,
  }));

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
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

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: 1,
          total: foundProducts.length,
        }}
      />
    </div>
  );
};

export default Search;
