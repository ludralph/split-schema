import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type client_session_role = $Result.DefaultSelection<$client_session_rolePayload>


/**
   * Model client_session_role
   */

export type AggregateClient_session_role = {
    _count: Client_session_roleCountAggregateOutputType | null
    _avg: Client_session_roleAvgAggregateOutputType | null
    _sum: Client_session_roleSumAggregateOutputType | null
    _min: Client_session_roleMinAggregateOutputType | null
    _max: Client_session_roleMaxAggregateOutputType | null
  }

  export type Client_session_roleAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_session_roleSumAggregateOutputType = {
    id: number | null
  }

  export type Client_session_roleMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_session_roleMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_session_roleCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_session_roleAvgAggregateInputType = {
    id?: true
  }

  export type Client_session_roleSumAggregateInputType = {
    id?: true
  }

  export type Client_session_roleMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_session_roleMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_session_roleCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_session_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session_role to aggregate.
     */
    where?: client_session_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_roles to fetch.
     */
    orderBy?: client_session_roleOrderByWithRelationInput | client_session_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_session_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_session_roles
    **/
    _count?: true | Client_session_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_session_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_session_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_session_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_session_roleMaxAggregateInputType
  }

  export type GetClient_session_roleAggregateType<T extends Client_session_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_session_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_session_role[P]>
      : GetScalarType<T[P], AggregateClient_session_role[P]>
  }




  export type client_session_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_session_roleWhereInput
    orderBy?: client_session_roleOrderByWithAggregationInput | client_session_roleOrderByWithAggregationInput[]
    by: Client_session_roleScalarFieldEnum[] | Client_session_roleScalarFieldEnum
    having?: client_session_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_session_roleCountAggregateInputType | true
    _avg?: Client_session_roleAvgAggregateInputType
    _sum?: Client_session_roleSumAggregateInputType
    _min?: Client_session_roleMinAggregateInputType
    _max?: Client_session_roleMaxAggregateInputType
  }

  export type Client_session_roleGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_session_roleCountAggregateOutputType | null
    _avg: Client_session_roleAvgAggregateOutputType | null
    _sum: Client_session_roleSumAggregateOutputType | null
    _min: Client_session_roleMinAggregateOutputType | null
    _max: Client_session_roleMaxAggregateOutputType | null
  }

  type GetClient_session_roleGroupByPayload<T extends client_session_roleGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_session_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_session_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_session_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Client_session_roleGroupByOutputType[P]>
        }
      >
    >


  export type client_session_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_session_role"]>

  export type client_session_roleSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_session_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_session_role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_session_role"]>
    composites: {}
  }


  type client_session_roleGetPayload<S extends boolean | null | undefined | client_session_roleDefaultArgs> = $Result.GetResult<$client_session_rolePayload, S>

  type client_session_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_session_roleFindManyArgs, 'select' | 'include'> & {
      select?: Client_session_roleCountAggregateInputType | true
    }

  export interface client_session_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_session_role'], meta: { name: 'client_session_role' } }
    /**
     * Find zero or one Client_session_role that matches the filter.
     * @param {client_session_roleFindUniqueArgs} args - Arguments to find a Client_session_role
     * @example
     * // Get one Client_session_role
     * const client_session_role = await prisma.client_session_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_session_roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_roleFindUniqueArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_session_role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_session_roleFindUniqueOrThrowArgs} args - Arguments to find a Client_session_role
     * @example
     * // Get one Client_session_role
     * const client_session_role = await prisma.client_session_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_session_roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_roleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_session_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_roleFindFirstArgs} args - Arguments to find a Client_session_role
     * @example
     * // Get one Client_session_role
     * const client_session_role = await prisma.client_session_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_session_roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_roleFindFirstArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_session_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_roleFindFirstOrThrowArgs} args - Arguments to find a Client_session_role
     * @example
     * // Get one Client_session_role
     * const client_session_role = await prisma.client_session_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_session_roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_roleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_session_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_session_roles
     * const client_session_roles = await prisma.client_session_role.findMany()
     * 
     * // Get first 10 Client_session_roles
     * const client_session_roles = await prisma.client_session_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_session_roleWithIdOnly = await prisma.client_session_role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_session_roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_roleFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_session_role.
     * @param {client_session_roleCreateArgs} args - Arguments to create a Client_session_role.
     * @example
     * // Create one Client_session_role
     * const Client_session_role = await prisma.client_session_role.create({
     *   data: {
     *     // ... data to create a Client_session_role
     *   }
     * })
     * 
    **/
    create<T extends client_session_roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_roleCreateArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_session_roles.
     *     @param {client_session_roleCreateManyArgs} args - Arguments to create many Client_session_roles.
     *     @example
     *     // Create many Client_session_roles
     *     const client_session_role = await prisma.client_session_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_session_roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_roleCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_session_role.
     * @param {client_session_roleDeleteArgs} args - Arguments to delete one Client_session_role.
     * @example
     * // Delete one Client_session_role
     * const Client_session_role = await prisma.client_session_role.delete({
     *   where: {
     *     // ... filter to delete one Client_session_role
     *   }
     * })
     * 
    **/
    delete<T extends client_session_roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_roleDeleteArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_session_role.
     * @param {client_session_roleUpdateArgs} args - Arguments to update one Client_session_role.
     * @example
     * // Update one Client_session_role
     * const client_session_role = await prisma.client_session_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_session_roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_roleUpdateArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_session_roles.
     * @param {client_session_roleDeleteManyArgs} args - Arguments to filter Client_session_roles to delete.
     * @example
     * // Delete a few Client_session_roles
     * const { count } = await prisma.client_session_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_session_roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_roleDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_session_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_session_roles
     * const client_session_role = await prisma.client_session_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_session_roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_roleUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_session_role.
     * @param {client_session_roleUpsertArgs} args - Arguments to update or create a Client_session_role.
     * @example
     * // Update or create a Client_session_role
     * const client_session_role = await prisma.client_session_role.upsert({
     *   create: {
     *     // ... data to create a Client_session_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_session_role we want to update
     *   }
     * })
    **/
    upsert<T extends client_session_roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_roleUpsertArgs<ExtArgs>>
    ): Prisma__client_session_roleClient<$Result.GetResult<$client_session_rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_session_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_roleCountArgs} args - Arguments to filter Client_session_roles to count.
     * @example
     * // Count the number of Client_session_roles
     * const count = await prisma.client_session_role.count({
     *   where: {
     *     // ... the filter for the Client_session_roles we want to count
     *   }
     * })
    **/
    count<T extends client_session_roleCountArgs>(
      args?: Subset<T, client_session_roleCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_session_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_session_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_session_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Client_session_roleAggregateArgs>(args: Subset<T, Client_session_roleAggregateArgs>): PrismaPromise<GetClient_session_roleAggregateType<T>>

    /**
     * Group by Client_session_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends client_session_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_session_roleGroupByArgs['orderBy'] }
        : { orderBy?: client_session_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, client_session_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_session_roleGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_session_role model
   */
  readonly fields: client_session_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_session_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_session_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the client_session_role model
   */ 
  interface client_session_roleFieldRefs {
    readonly id: FieldRef<"client_session_role", 'Int'>
    readonly domain: FieldRef<"client_session_role", 'String'>
    readonly props: FieldRef<"client_session_role", 'Json'>
    readonly groups: FieldRef<"client_session_role", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_session_role findUnique
   */
  export type client_session_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * Filter, which client_session_role to fetch.
     */
    where: client_session_roleWhereUniqueInput
  }


  /**
   * client_session_role findUniqueOrThrow
   */
  export type client_session_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * Filter, which client_session_role to fetch.
     */
    where: client_session_roleWhereUniqueInput
  }


  /**
   * client_session_role findFirst
   */
  export type client_session_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * Filter, which client_session_role to fetch.
     */
    where?: client_session_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_roles to fetch.
     */
    orderBy?: client_session_roleOrderByWithRelationInput | client_session_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_session_roles.
     */
    cursor?: client_session_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_session_roles.
     */
    distinct?: Client_session_roleScalarFieldEnum | Client_session_roleScalarFieldEnum[]
  }


  /**
   * client_session_role findFirstOrThrow
   */
  export type client_session_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * Filter, which client_session_role to fetch.
     */
    where?: client_session_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_roles to fetch.
     */
    orderBy?: client_session_roleOrderByWithRelationInput | client_session_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_session_roles.
     */
    cursor?: client_session_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_session_roles.
     */
    distinct?: Client_session_roleScalarFieldEnum | Client_session_roleScalarFieldEnum[]
  }


  /**
   * client_session_role findMany
   */
  export type client_session_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * Filter, which client_session_roles to fetch.
     */
    where?: client_session_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_roles to fetch.
     */
    orderBy?: client_session_roleOrderByWithRelationInput | client_session_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_session_roles.
     */
    cursor?: client_session_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_roles.
     */
    skip?: number
    distinct?: Client_session_roleScalarFieldEnum | Client_session_roleScalarFieldEnum[]
  }


  /**
   * client_session_role create
   */
  export type client_session_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * The data needed to create a client_session_role.
     */
    data: XOR<client_session_roleCreateInput, client_session_roleUncheckedCreateInput>
  }


  /**
   * client_session_role createMany
   */
  export type client_session_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_session_roles.
     */
    data: client_session_roleCreateManyInput | client_session_roleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_session_role update
   */
  export type client_session_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * The data needed to update a client_session_role.
     */
    data: XOR<client_session_roleUpdateInput, client_session_roleUncheckedUpdateInput>
    /**
     * Choose, which client_session_role to update.
     */
    where: client_session_roleWhereUniqueInput
  }


  /**
   * client_session_role updateMany
   */
  export type client_session_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_session_roles.
     */
    data: XOR<client_session_roleUpdateManyMutationInput, client_session_roleUncheckedUpdateManyInput>
    /**
     * Filter which client_session_roles to update
     */
    where?: client_session_roleWhereInput
  }


  /**
   * client_session_role upsert
   */
  export type client_session_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * The filter to search for the client_session_role to update in case it exists.
     */
    where: client_session_roleWhereUniqueInput
    /**
     * In case the client_session_role found by the `where` argument doesn't exist, create a new client_session_role with this data.
     */
    create: XOR<client_session_roleCreateInput, client_session_roleUncheckedCreateInput>
    /**
     * In case the client_session_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_session_roleUpdateInput, client_session_roleUncheckedUpdateInput>
  }


  /**
   * client_session_role delete
   */
  export type client_session_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
    /**
     * Filter which client_session_role to delete.
     */
    where: client_session_roleWhereUniqueInput
  }


  /**
   * client_session_role deleteMany
   */
  export type client_session_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session_roles to delete
     */
    where?: client_session_roleWhereInput
  }


  /**
   * client_session_role without action
   */
  export type client_session_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_role
     */
    select?: client_session_roleSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_session_roleWhereInput = {
    AND?: client_session_roleWhereInput | client_session_roleWhereInput[]
    OR?: client_session_roleWhereInput[]
    NOT?: client_session_roleWhereInput | client_session_roleWhereInput[]
    id?: IntFilter<"client_session_role"> | number
    domain?: StringFilter<"client_session_role"> | string
    props?: JsonFilter<"client_session_role">
    groups?: JsonFilter<"client_session_role">
  }

  export type client_session_roleOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_session_roleWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_session_roleWhereInput | client_session_roleWhereInput[]
    OR?: client_session_roleWhereInput[]
    NOT?: client_session_roleWhereInput | client_session_roleWhereInput[]
    props?: JsonFilter<"client_session_role">
    groups?: JsonFilter<"client_session_role">
  }, "id" | "domain">

  export type client_session_roleOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_session_roleCountOrderByAggregateInput
    _avg?: client_session_roleAvgOrderByAggregateInput
    _max?: client_session_roleMaxOrderByAggregateInput
    _min?: client_session_roleMinOrderByAggregateInput
    _sum?: client_session_roleSumOrderByAggregateInput
  }

  export type client_session_roleScalarWhereWithAggregatesInput = {
    AND?: client_session_roleScalarWhereWithAggregatesInput | client_session_roleScalarWhereWithAggregatesInput[]
    OR?: client_session_roleScalarWhereWithAggregatesInput[]
    NOT?: client_session_roleScalarWhereWithAggregatesInput | client_session_roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_session_role"> | number
    domain?: StringWithAggregatesFilter<"client_session_role"> | string
    props?: JsonWithAggregatesFilter<"client_session_role">
    groups?: JsonWithAggregatesFilter<"client_session_role">
  }

  export type client_session_roleCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_roleCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_session_roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_session_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_session_roleMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_session_roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_session_roleDefaultArgs instead
     */
    export type client_session_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_session_roleDefaultArgs<ExtArgs>

    export const Client_session_roleScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_session_roleScalarFieldEnum = (typeof Client_session_roleScalarFieldEnum)[keyof typeof Client_session_roleScalarFieldEnum]
    