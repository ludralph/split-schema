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

export type client_auth_flow_bindings = $Result.DefaultSelection<$client_auth_flow_bindingsPayload>


/**
   * Model client_auth_flow_bindings
   */

export type AggregateClient_auth_flow_bindings = {
    _count: Client_auth_flow_bindingsCountAggregateOutputType | null
    _avg: Client_auth_flow_bindingsAvgAggregateOutputType | null
    _sum: Client_auth_flow_bindingsSumAggregateOutputType | null
    _min: Client_auth_flow_bindingsMinAggregateOutputType | null
    _max: Client_auth_flow_bindingsMaxAggregateOutputType | null
  }

  export type Client_auth_flow_bindingsAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_auth_flow_bindingsSumAggregateOutputType = {
    id: number | null
  }

  export type Client_auth_flow_bindingsMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_auth_flow_bindingsMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_auth_flow_bindingsCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_auth_flow_bindingsAvgAggregateInputType = {
    id?: true
  }

  export type Client_auth_flow_bindingsSumAggregateInputType = {
    id?: true
  }

  export type Client_auth_flow_bindingsMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_auth_flow_bindingsMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_auth_flow_bindingsCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_auth_flow_bindingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_auth_flow_bindings to aggregate.
     */
    where?: client_auth_flow_bindingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_auth_flow_bindingss to fetch.
     */
    orderBy?: client_auth_flow_bindingsOrderByWithRelationInput | client_auth_flow_bindingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_auth_flow_bindingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_auth_flow_bindingss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_auth_flow_bindingss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_auth_flow_bindingss
    **/
    _count?: true | Client_auth_flow_bindingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_auth_flow_bindingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_auth_flow_bindingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_auth_flow_bindingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_auth_flow_bindingsMaxAggregateInputType
  }

  export type GetClient_auth_flow_bindingsAggregateType<T extends Client_auth_flow_bindingsAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_auth_flow_bindings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_auth_flow_bindings[P]>
      : GetScalarType<T[P], AggregateClient_auth_flow_bindings[P]>
  }




  export type client_auth_flow_bindingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_auth_flow_bindingsWhereInput
    orderBy?: client_auth_flow_bindingsOrderByWithAggregationInput | client_auth_flow_bindingsOrderByWithAggregationInput[]
    by: Client_auth_flow_bindingsScalarFieldEnum[] | Client_auth_flow_bindingsScalarFieldEnum
    having?: client_auth_flow_bindingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_auth_flow_bindingsCountAggregateInputType | true
    _avg?: Client_auth_flow_bindingsAvgAggregateInputType
    _sum?: Client_auth_flow_bindingsSumAggregateInputType
    _min?: Client_auth_flow_bindingsMinAggregateInputType
    _max?: Client_auth_flow_bindingsMaxAggregateInputType
  }

  export type Client_auth_flow_bindingsGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_auth_flow_bindingsCountAggregateOutputType | null
    _avg: Client_auth_flow_bindingsAvgAggregateOutputType | null
    _sum: Client_auth_flow_bindingsSumAggregateOutputType | null
    _min: Client_auth_flow_bindingsMinAggregateOutputType | null
    _max: Client_auth_flow_bindingsMaxAggregateOutputType | null
  }

  type GetClient_auth_flow_bindingsGroupByPayload<T extends client_auth_flow_bindingsGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_auth_flow_bindingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_auth_flow_bindingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_auth_flow_bindingsGroupByOutputType[P]>
            : GetScalarType<T[P], Client_auth_flow_bindingsGroupByOutputType[P]>
        }
      >
    >


  export type client_auth_flow_bindingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_auth_flow_bindings"]>

  export type client_auth_flow_bindingsSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_auth_flow_bindingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_auth_flow_bindings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_auth_flow_bindings"]>
    composites: {}
  }


  type client_auth_flow_bindingsGetPayload<S extends boolean | null | undefined | client_auth_flow_bindingsDefaultArgs> = $Result.GetResult<$client_auth_flow_bindingsPayload, S>

  type client_auth_flow_bindingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_auth_flow_bindingsFindManyArgs, 'select' | 'include'> & {
      select?: Client_auth_flow_bindingsCountAggregateInputType | true
    }

  export interface client_auth_flow_bindingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_auth_flow_bindings'], meta: { name: 'client_auth_flow_bindings' } }
    /**
     * Find zero or one Client_auth_flow_bindings that matches the filter.
     * @param {client_auth_flow_bindingsFindUniqueArgs} args - Arguments to find a Client_auth_flow_bindings
     * @example
     * // Get one Client_auth_flow_bindings
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_auth_flow_bindingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_auth_flow_bindingsFindUniqueArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_auth_flow_bindings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_auth_flow_bindingsFindUniqueOrThrowArgs} args - Arguments to find a Client_auth_flow_bindings
     * @example
     * // Get one Client_auth_flow_bindings
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_auth_flow_bindingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_auth_flow_bindingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_auth_flow_bindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_auth_flow_bindingsFindFirstArgs} args - Arguments to find a Client_auth_flow_bindings
     * @example
     * // Get one Client_auth_flow_bindings
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_auth_flow_bindingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_auth_flow_bindingsFindFirstArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_auth_flow_bindings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_auth_flow_bindingsFindFirstOrThrowArgs} args - Arguments to find a Client_auth_flow_bindings
     * @example
     * // Get one Client_auth_flow_bindings
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_auth_flow_bindingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_auth_flow_bindingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_auth_flow_bindingss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_auth_flow_bindingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_auth_flow_bindingss
     * const client_auth_flow_bindingss = await prisma.client_auth_flow_bindings.findMany()
     * 
     * // Get first 10 Client_auth_flow_bindingss
     * const client_auth_flow_bindingss = await prisma.client_auth_flow_bindings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_auth_flow_bindingsWithIdOnly = await prisma.client_auth_flow_bindings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_auth_flow_bindingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_auth_flow_bindingsFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_auth_flow_bindings.
     * @param {client_auth_flow_bindingsCreateArgs} args - Arguments to create a Client_auth_flow_bindings.
     * @example
     * // Create one Client_auth_flow_bindings
     * const Client_auth_flow_bindings = await prisma.client_auth_flow_bindings.create({
     *   data: {
     *     // ... data to create a Client_auth_flow_bindings
     *   }
     * })
     * 
    **/
    create<T extends client_auth_flow_bindingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_auth_flow_bindingsCreateArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_auth_flow_bindingss.
     *     @param {client_auth_flow_bindingsCreateManyArgs} args - Arguments to create many Client_auth_flow_bindingss.
     *     @example
     *     // Create many Client_auth_flow_bindingss
     *     const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_auth_flow_bindingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_auth_flow_bindingsCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_auth_flow_bindings.
     * @param {client_auth_flow_bindingsDeleteArgs} args - Arguments to delete one Client_auth_flow_bindings.
     * @example
     * // Delete one Client_auth_flow_bindings
     * const Client_auth_flow_bindings = await prisma.client_auth_flow_bindings.delete({
     *   where: {
     *     // ... filter to delete one Client_auth_flow_bindings
     *   }
     * })
     * 
    **/
    delete<T extends client_auth_flow_bindingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_auth_flow_bindingsDeleteArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_auth_flow_bindings.
     * @param {client_auth_flow_bindingsUpdateArgs} args - Arguments to update one Client_auth_flow_bindings.
     * @example
     * // Update one Client_auth_flow_bindings
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_auth_flow_bindingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_auth_flow_bindingsUpdateArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_auth_flow_bindingss.
     * @param {client_auth_flow_bindingsDeleteManyArgs} args - Arguments to filter Client_auth_flow_bindingss to delete.
     * @example
     * // Delete a few Client_auth_flow_bindingss
     * const { count } = await prisma.client_auth_flow_bindings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_auth_flow_bindingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_auth_flow_bindingsDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_auth_flow_bindingss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_auth_flow_bindingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_auth_flow_bindingss
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_auth_flow_bindingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_auth_flow_bindingsUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_auth_flow_bindings.
     * @param {client_auth_flow_bindingsUpsertArgs} args - Arguments to update or create a Client_auth_flow_bindings.
     * @example
     * // Update or create a Client_auth_flow_bindings
     * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.upsert({
     *   create: {
     *     // ... data to create a Client_auth_flow_bindings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_auth_flow_bindings we want to update
     *   }
     * })
    **/
    upsert<T extends client_auth_flow_bindingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_auth_flow_bindingsUpsertArgs<ExtArgs>>
    ): Prisma__client_auth_flow_bindingsClient<$Result.GetResult<$client_auth_flow_bindingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_auth_flow_bindingss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_auth_flow_bindingsCountArgs} args - Arguments to filter Client_auth_flow_bindingss to count.
     * @example
     * // Count the number of Client_auth_flow_bindingss
     * const count = await prisma.client_auth_flow_bindings.count({
     *   where: {
     *     // ... the filter for the Client_auth_flow_bindingss we want to count
     *   }
     * })
    **/
    count<T extends client_auth_flow_bindingsCountArgs>(
      args?: Subset<T, client_auth_flow_bindingsCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_auth_flow_bindingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_auth_flow_bindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_auth_flow_bindingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_auth_flow_bindingsAggregateArgs>(args: Subset<T, Client_auth_flow_bindingsAggregateArgs>): PrismaPromise<GetClient_auth_flow_bindingsAggregateType<T>>

    /**
     * Group by Client_auth_flow_bindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_auth_flow_bindingsGroupByArgs} args - Group by arguments.
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
      T extends client_auth_flow_bindingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_auth_flow_bindingsGroupByArgs['orderBy'] }
        : { orderBy?: client_auth_flow_bindingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_auth_flow_bindingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_auth_flow_bindingsGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_auth_flow_bindings model
   */
  readonly fields: client_auth_flow_bindingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_auth_flow_bindings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_auth_flow_bindingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_auth_flow_bindings model
   */ 
  interface client_auth_flow_bindingsFieldRefs {
    readonly id: FieldRef<"client_auth_flow_bindings", 'Int'>
    readonly domain: FieldRef<"client_auth_flow_bindings", 'String'>
    readonly props: FieldRef<"client_auth_flow_bindings", 'Json'>
    readonly groups: FieldRef<"client_auth_flow_bindings", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_auth_flow_bindings findUnique
   */
  export type client_auth_flow_bindingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * Filter, which client_auth_flow_bindings to fetch.
     */
    where: client_auth_flow_bindingsWhereUniqueInput
  }


  /**
   * client_auth_flow_bindings findUniqueOrThrow
   */
  export type client_auth_flow_bindingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * Filter, which client_auth_flow_bindings to fetch.
     */
    where: client_auth_flow_bindingsWhereUniqueInput
  }


  /**
   * client_auth_flow_bindings findFirst
   */
  export type client_auth_flow_bindingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * Filter, which client_auth_flow_bindings to fetch.
     */
    where?: client_auth_flow_bindingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_auth_flow_bindingss to fetch.
     */
    orderBy?: client_auth_flow_bindingsOrderByWithRelationInput | client_auth_flow_bindingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_auth_flow_bindingss.
     */
    cursor?: client_auth_flow_bindingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_auth_flow_bindingss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_auth_flow_bindingss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_auth_flow_bindingss.
     */
    distinct?: Client_auth_flow_bindingsScalarFieldEnum | Client_auth_flow_bindingsScalarFieldEnum[]
  }


  /**
   * client_auth_flow_bindings findFirstOrThrow
   */
  export type client_auth_flow_bindingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * Filter, which client_auth_flow_bindings to fetch.
     */
    where?: client_auth_flow_bindingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_auth_flow_bindingss to fetch.
     */
    orderBy?: client_auth_flow_bindingsOrderByWithRelationInput | client_auth_flow_bindingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_auth_flow_bindingss.
     */
    cursor?: client_auth_flow_bindingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_auth_flow_bindingss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_auth_flow_bindingss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_auth_flow_bindingss.
     */
    distinct?: Client_auth_flow_bindingsScalarFieldEnum | Client_auth_flow_bindingsScalarFieldEnum[]
  }


  /**
   * client_auth_flow_bindings findMany
   */
  export type client_auth_flow_bindingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * Filter, which client_auth_flow_bindingss to fetch.
     */
    where?: client_auth_flow_bindingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_auth_flow_bindingss to fetch.
     */
    orderBy?: client_auth_flow_bindingsOrderByWithRelationInput | client_auth_flow_bindingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_auth_flow_bindingss.
     */
    cursor?: client_auth_flow_bindingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_auth_flow_bindingss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_auth_flow_bindingss.
     */
    skip?: number
    distinct?: Client_auth_flow_bindingsScalarFieldEnum | Client_auth_flow_bindingsScalarFieldEnum[]
  }


  /**
   * client_auth_flow_bindings create
   */
  export type client_auth_flow_bindingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * The data needed to create a client_auth_flow_bindings.
     */
    data: XOR<client_auth_flow_bindingsCreateInput, client_auth_flow_bindingsUncheckedCreateInput>
  }


  /**
   * client_auth_flow_bindings createMany
   */
  export type client_auth_flow_bindingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_auth_flow_bindingss.
     */
    data: client_auth_flow_bindingsCreateManyInput | client_auth_flow_bindingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_auth_flow_bindings update
   */
  export type client_auth_flow_bindingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * The data needed to update a client_auth_flow_bindings.
     */
    data: XOR<client_auth_flow_bindingsUpdateInput, client_auth_flow_bindingsUncheckedUpdateInput>
    /**
     * Choose, which client_auth_flow_bindings to update.
     */
    where: client_auth_flow_bindingsWhereUniqueInput
  }


  /**
   * client_auth_flow_bindings updateMany
   */
  export type client_auth_flow_bindingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_auth_flow_bindingss.
     */
    data: XOR<client_auth_flow_bindingsUpdateManyMutationInput, client_auth_flow_bindingsUncheckedUpdateManyInput>
    /**
     * Filter which client_auth_flow_bindingss to update
     */
    where?: client_auth_flow_bindingsWhereInput
  }


  /**
   * client_auth_flow_bindings upsert
   */
  export type client_auth_flow_bindingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * The filter to search for the client_auth_flow_bindings to update in case it exists.
     */
    where: client_auth_flow_bindingsWhereUniqueInput
    /**
     * In case the client_auth_flow_bindings found by the `where` argument doesn't exist, create a new client_auth_flow_bindings with this data.
     */
    create: XOR<client_auth_flow_bindingsCreateInput, client_auth_flow_bindingsUncheckedCreateInput>
    /**
     * In case the client_auth_flow_bindings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_auth_flow_bindingsUpdateInput, client_auth_flow_bindingsUncheckedUpdateInput>
  }


  /**
   * client_auth_flow_bindings delete
   */
  export type client_auth_flow_bindingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
    /**
     * Filter which client_auth_flow_bindings to delete.
     */
    where: client_auth_flow_bindingsWhereUniqueInput
  }


  /**
   * client_auth_flow_bindings deleteMany
   */
  export type client_auth_flow_bindingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_auth_flow_bindingss to delete
     */
    where?: client_auth_flow_bindingsWhereInput
  }


  /**
   * client_auth_flow_bindings without action
   */
  export type client_auth_flow_bindingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_auth_flow_bindings
     */
    select?: client_auth_flow_bindingsSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_auth_flow_bindingsWhereInput = {
    AND?: client_auth_flow_bindingsWhereInput | client_auth_flow_bindingsWhereInput[]
    OR?: client_auth_flow_bindingsWhereInput[]
    NOT?: client_auth_flow_bindingsWhereInput | client_auth_flow_bindingsWhereInput[]
    id?: IntFilter<"client_auth_flow_bindings"> | number
    domain?: StringFilter<"client_auth_flow_bindings"> | string
    props?: JsonFilter<"client_auth_flow_bindings">
    groups?: JsonFilter<"client_auth_flow_bindings">
  }

  export type client_auth_flow_bindingsOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_auth_flow_bindingsWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_auth_flow_bindingsWhereInput | client_auth_flow_bindingsWhereInput[]
    OR?: client_auth_flow_bindingsWhereInput[]
    NOT?: client_auth_flow_bindingsWhereInput | client_auth_flow_bindingsWhereInput[]
    props?: JsonFilter<"client_auth_flow_bindings">
    groups?: JsonFilter<"client_auth_flow_bindings">
  }, "id" | "domain">

  export type client_auth_flow_bindingsOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_auth_flow_bindingsCountOrderByAggregateInput
    _avg?: client_auth_flow_bindingsAvgOrderByAggregateInput
    _max?: client_auth_flow_bindingsMaxOrderByAggregateInput
    _min?: client_auth_flow_bindingsMinOrderByAggregateInput
    _sum?: client_auth_flow_bindingsSumOrderByAggregateInput
  }

  export type client_auth_flow_bindingsScalarWhereWithAggregatesInput = {
    AND?: client_auth_flow_bindingsScalarWhereWithAggregatesInput | client_auth_flow_bindingsScalarWhereWithAggregatesInput[]
    OR?: client_auth_flow_bindingsScalarWhereWithAggregatesInput[]
    NOT?: client_auth_flow_bindingsScalarWhereWithAggregatesInput | client_auth_flow_bindingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_auth_flow_bindings"> | number
    domain?: StringWithAggregatesFilter<"client_auth_flow_bindings"> | string
    props?: JsonWithAggregatesFilter<"client_auth_flow_bindings">
    groups?: JsonWithAggregatesFilter<"client_auth_flow_bindings">
  }

  export type client_auth_flow_bindingsCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_auth_flow_bindingsCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_auth_flow_bindingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_auth_flow_bindingsMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_auth_flow_bindingsMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_auth_flow_bindingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_auth_flow_bindingsDefaultArgs instead
     */
    export type client_auth_flow_bindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_auth_flow_bindingsDefaultArgs<ExtArgs>

    export const Client_auth_flow_bindingsScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_auth_flow_bindingsScalarFieldEnum = (typeof Client_auth_flow_bindingsScalarFieldEnum)[keyof typeof Client_auth_flow_bindingsScalarFieldEnum]
    