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

export type client_scope_role_mapping = $Result.DefaultSelection<$client_scope_role_mappingPayload>


/**
   * Model client_scope_role_mapping
   */

export type AggregateClient_scope_role_mapping = {
    _count: Client_scope_role_mappingCountAggregateOutputType | null
    _avg: Client_scope_role_mappingAvgAggregateOutputType | null
    _sum: Client_scope_role_mappingSumAggregateOutputType | null
    _min: Client_scope_role_mappingMinAggregateOutputType | null
    _max: Client_scope_role_mappingMaxAggregateOutputType | null
  }

  export type Client_scope_role_mappingAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_scope_role_mappingSumAggregateOutputType = {
    id: number | null
  }

  export type Client_scope_role_mappingMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scope_role_mappingMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scope_role_mappingCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_scope_role_mappingAvgAggregateInputType = {
    id?: true
  }

  export type Client_scope_role_mappingSumAggregateInputType = {
    id?: true
  }

  export type Client_scope_role_mappingMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scope_role_mappingMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scope_role_mappingCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_scope_role_mappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope_role_mapping to aggregate.
     */
    where?: client_scope_role_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_role_mappings to fetch.
     */
    orderBy?: client_scope_role_mappingOrderByWithRelationInput | client_scope_role_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_scope_role_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_role_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_role_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_scope_role_mappings
    **/
    _count?: true | Client_scope_role_mappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_scope_role_mappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_scope_role_mappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_scope_role_mappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_scope_role_mappingMaxAggregateInputType
  }

  export type GetClient_scope_role_mappingAggregateType<T extends Client_scope_role_mappingAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_scope_role_mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_scope_role_mapping[P]>
      : GetScalarType<T[P], AggregateClient_scope_role_mapping[P]>
  }




  export type client_scope_role_mappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_scope_role_mappingWhereInput
    orderBy?: client_scope_role_mappingOrderByWithAggregationInput | client_scope_role_mappingOrderByWithAggregationInput[]
    by: Client_scope_role_mappingScalarFieldEnum[] | Client_scope_role_mappingScalarFieldEnum
    having?: client_scope_role_mappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_scope_role_mappingCountAggregateInputType | true
    _avg?: Client_scope_role_mappingAvgAggregateInputType
    _sum?: Client_scope_role_mappingSumAggregateInputType
    _min?: Client_scope_role_mappingMinAggregateInputType
    _max?: Client_scope_role_mappingMaxAggregateInputType
  }

  export type Client_scope_role_mappingGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_scope_role_mappingCountAggregateOutputType | null
    _avg: Client_scope_role_mappingAvgAggregateOutputType | null
    _sum: Client_scope_role_mappingSumAggregateOutputType | null
    _min: Client_scope_role_mappingMinAggregateOutputType | null
    _max: Client_scope_role_mappingMaxAggregateOutputType | null
  }

  type GetClient_scope_role_mappingGroupByPayload<T extends client_scope_role_mappingGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_scope_role_mappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_scope_role_mappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_scope_role_mappingGroupByOutputType[P]>
            : GetScalarType<T[P], Client_scope_role_mappingGroupByOutputType[P]>
        }
      >
    >


  export type client_scope_role_mappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_scope_role_mapping"]>

  export type client_scope_role_mappingSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_scope_role_mappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_scope_role_mapping"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_scope_role_mapping"]>
    composites: {}
  }


  type client_scope_role_mappingGetPayload<S extends boolean | null | undefined | client_scope_role_mappingDefaultArgs> = $Result.GetResult<$client_scope_role_mappingPayload, S>

  type client_scope_role_mappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_scope_role_mappingFindManyArgs, 'select' | 'include'> & {
      select?: Client_scope_role_mappingCountAggregateInputType | true
    }

  export interface client_scope_role_mappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_scope_role_mapping'], meta: { name: 'client_scope_role_mapping' } }
    /**
     * Find zero or one Client_scope_role_mapping that matches the filter.
     * @param {client_scope_role_mappingFindUniqueArgs} args - Arguments to find a Client_scope_role_mapping
     * @example
     * // Get one Client_scope_role_mapping
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_scope_role_mappingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_role_mappingFindUniqueArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_scope_role_mapping that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_scope_role_mappingFindUniqueOrThrowArgs} args - Arguments to find a Client_scope_role_mapping
     * @example
     * // Get one Client_scope_role_mapping
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_scope_role_mappingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_role_mappingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_scope_role_mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_role_mappingFindFirstArgs} args - Arguments to find a Client_scope_role_mapping
     * @example
     * // Get one Client_scope_role_mapping
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_scope_role_mappingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_role_mappingFindFirstArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_scope_role_mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_role_mappingFindFirstOrThrowArgs} args - Arguments to find a Client_scope_role_mapping
     * @example
     * // Get one Client_scope_role_mapping
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_scope_role_mappingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_role_mappingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_scope_role_mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_role_mappingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_scope_role_mappings
     * const client_scope_role_mappings = await prisma.client_scope_role_mapping.findMany()
     * 
     * // Get first 10 Client_scope_role_mappings
     * const client_scope_role_mappings = await prisma.client_scope_role_mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_scope_role_mappingWithIdOnly = await prisma.client_scope_role_mapping.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_scope_role_mappingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_role_mappingFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_scope_role_mapping.
     * @param {client_scope_role_mappingCreateArgs} args - Arguments to create a Client_scope_role_mapping.
     * @example
     * // Create one Client_scope_role_mapping
     * const Client_scope_role_mapping = await prisma.client_scope_role_mapping.create({
     *   data: {
     *     // ... data to create a Client_scope_role_mapping
     *   }
     * })
     * 
    **/
    create<T extends client_scope_role_mappingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_role_mappingCreateArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_scope_role_mappings.
     *     @param {client_scope_role_mappingCreateManyArgs} args - Arguments to create many Client_scope_role_mappings.
     *     @example
     *     // Create many Client_scope_role_mappings
     *     const client_scope_role_mapping = await prisma.client_scope_role_mapping.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_scope_role_mappingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_role_mappingCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_scope_role_mapping.
     * @param {client_scope_role_mappingDeleteArgs} args - Arguments to delete one Client_scope_role_mapping.
     * @example
     * // Delete one Client_scope_role_mapping
     * const Client_scope_role_mapping = await prisma.client_scope_role_mapping.delete({
     *   where: {
     *     // ... filter to delete one Client_scope_role_mapping
     *   }
     * })
     * 
    **/
    delete<T extends client_scope_role_mappingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_role_mappingDeleteArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_scope_role_mapping.
     * @param {client_scope_role_mappingUpdateArgs} args - Arguments to update one Client_scope_role_mapping.
     * @example
     * // Update one Client_scope_role_mapping
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_scope_role_mappingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_role_mappingUpdateArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_scope_role_mappings.
     * @param {client_scope_role_mappingDeleteManyArgs} args - Arguments to filter Client_scope_role_mappings to delete.
     * @example
     * // Delete a few Client_scope_role_mappings
     * const { count } = await prisma.client_scope_role_mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_scope_role_mappingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_role_mappingDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_scope_role_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_role_mappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_scope_role_mappings
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_scope_role_mappingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_role_mappingUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_scope_role_mapping.
     * @param {client_scope_role_mappingUpsertArgs} args - Arguments to update or create a Client_scope_role_mapping.
     * @example
     * // Update or create a Client_scope_role_mapping
     * const client_scope_role_mapping = await prisma.client_scope_role_mapping.upsert({
     *   create: {
     *     // ... data to create a Client_scope_role_mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_scope_role_mapping we want to update
     *   }
     * })
    **/
    upsert<T extends client_scope_role_mappingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_role_mappingUpsertArgs<ExtArgs>>
    ): Prisma__client_scope_role_mappingClient<$Result.GetResult<$client_scope_role_mappingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_scope_role_mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_role_mappingCountArgs} args - Arguments to filter Client_scope_role_mappings to count.
     * @example
     * // Count the number of Client_scope_role_mappings
     * const count = await prisma.client_scope_role_mapping.count({
     *   where: {
     *     // ... the filter for the Client_scope_role_mappings we want to count
     *   }
     * })
    **/
    count<T extends client_scope_role_mappingCountArgs>(
      args?: Subset<T, client_scope_role_mappingCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_scope_role_mappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_scope_role_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_scope_role_mappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_scope_role_mappingAggregateArgs>(args: Subset<T, Client_scope_role_mappingAggregateArgs>): PrismaPromise<GetClient_scope_role_mappingAggregateType<T>>

    /**
     * Group by Client_scope_role_mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_role_mappingGroupByArgs} args - Group by arguments.
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
      T extends client_scope_role_mappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_scope_role_mappingGroupByArgs['orderBy'] }
        : { orderBy?: client_scope_role_mappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_scope_role_mappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_scope_role_mappingGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_scope_role_mapping model
   */
  readonly fields: client_scope_role_mappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_scope_role_mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_scope_role_mappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_scope_role_mapping model
   */ 
  interface client_scope_role_mappingFieldRefs {
    readonly id: FieldRef<"client_scope_role_mapping", 'Int'>
    readonly domain: FieldRef<"client_scope_role_mapping", 'String'>
    readonly props: FieldRef<"client_scope_role_mapping", 'Json'>
    readonly groups: FieldRef<"client_scope_role_mapping", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_scope_role_mapping findUnique
   */
  export type client_scope_role_mappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_role_mapping to fetch.
     */
    where: client_scope_role_mappingWhereUniqueInput
  }


  /**
   * client_scope_role_mapping findUniqueOrThrow
   */
  export type client_scope_role_mappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_role_mapping to fetch.
     */
    where: client_scope_role_mappingWhereUniqueInput
  }


  /**
   * client_scope_role_mapping findFirst
   */
  export type client_scope_role_mappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_role_mapping to fetch.
     */
    where?: client_scope_role_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_role_mappings to fetch.
     */
    orderBy?: client_scope_role_mappingOrderByWithRelationInput | client_scope_role_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scope_role_mappings.
     */
    cursor?: client_scope_role_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_role_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_role_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scope_role_mappings.
     */
    distinct?: Client_scope_role_mappingScalarFieldEnum | Client_scope_role_mappingScalarFieldEnum[]
  }


  /**
   * client_scope_role_mapping findFirstOrThrow
   */
  export type client_scope_role_mappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_role_mapping to fetch.
     */
    where?: client_scope_role_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_role_mappings to fetch.
     */
    orderBy?: client_scope_role_mappingOrderByWithRelationInput | client_scope_role_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scope_role_mappings.
     */
    cursor?: client_scope_role_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_role_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_role_mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scope_role_mappings.
     */
    distinct?: Client_scope_role_mappingScalarFieldEnum | Client_scope_role_mappingScalarFieldEnum[]
  }


  /**
   * client_scope_role_mapping findMany
   */
  export type client_scope_role_mappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_role_mappings to fetch.
     */
    where?: client_scope_role_mappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_role_mappings to fetch.
     */
    orderBy?: client_scope_role_mappingOrderByWithRelationInput | client_scope_role_mappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_scope_role_mappings.
     */
    cursor?: client_scope_role_mappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_role_mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_role_mappings.
     */
    skip?: number
    distinct?: Client_scope_role_mappingScalarFieldEnum | Client_scope_role_mappingScalarFieldEnum[]
  }


  /**
   * client_scope_role_mapping create
   */
  export type client_scope_role_mappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * The data needed to create a client_scope_role_mapping.
     */
    data: XOR<client_scope_role_mappingCreateInput, client_scope_role_mappingUncheckedCreateInput>
  }


  /**
   * client_scope_role_mapping createMany
   */
  export type client_scope_role_mappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_scope_role_mappings.
     */
    data: client_scope_role_mappingCreateManyInput | client_scope_role_mappingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_scope_role_mapping update
   */
  export type client_scope_role_mappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * The data needed to update a client_scope_role_mapping.
     */
    data: XOR<client_scope_role_mappingUpdateInput, client_scope_role_mappingUncheckedUpdateInput>
    /**
     * Choose, which client_scope_role_mapping to update.
     */
    where: client_scope_role_mappingWhereUniqueInput
  }


  /**
   * client_scope_role_mapping updateMany
   */
  export type client_scope_role_mappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_scope_role_mappings.
     */
    data: XOR<client_scope_role_mappingUpdateManyMutationInput, client_scope_role_mappingUncheckedUpdateManyInput>
    /**
     * Filter which client_scope_role_mappings to update
     */
    where?: client_scope_role_mappingWhereInput
  }


  /**
   * client_scope_role_mapping upsert
   */
  export type client_scope_role_mappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * The filter to search for the client_scope_role_mapping to update in case it exists.
     */
    where: client_scope_role_mappingWhereUniqueInput
    /**
     * In case the client_scope_role_mapping found by the `where` argument doesn't exist, create a new client_scope_role_mapping with this data.
     */
    create: XOR<client_scope_role_mappingCreateInput, client_scope_role_mappingUncheckedCreateInput>
    /**
     * In case the client_scope_role_mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_scope_role_mappingUpdateInput, client_scope_role_mappingUncheckedUpdateInput>
  }


  /**
   * client_scope_role_mapping delete
   */
  export type client_scope_role_mappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
    /**
     * Filter which client_scope_role_mapping to delete.
     */
    where: client_scope_role_mappingWhereUniqueInput
  }


  /**
   * client_scope_role_mapping deleteMany
   */
  export type client_scope_role_mappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope_role_mappings to delete
     */
    where?: client_scope_role_mappingWhereInput
  }


  /**
   * client_scope_role_mapping without action
   */
  export type client_scope_role_mappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_role_mapping
     */
    select?: client_scope_role_mappingSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_scope_role_mappingWhereInput = {
    AND?: client_scope_role_mappingWhereInput | client_scope_role_mappingWhereInput[]
    OR?: client_scope_role_mappingWhereInput[]
    NOT?: client_scope_role_mappingWhereInput | client_scope_role_mappingWhereInput[]
    id?: IntFilter<"client_scope_role_mapping"> | number
    domain?: StringFilter<"client_scope_role_mapping"> | string
    props?: JsonFilter<"client_scope_role_mapping">
    groups?: JsonFilter<"client_scope_role_mapping">
  }

  export type client_scope_role_mappingOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scope_role_mappingWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_scope_role_mappingWhereInput | client_scope_role_mappingWhereInput[]
    OR?: client_scope_role_mappingWhereInput[]
    NOT?: client_scope_role_mappingWhereInput | client_scope_role_mappingWhereInput[]
    props?: JsonFilter<"client_scope_role_mapping">
    groups?: JsonFilter<"client_scope_role_mapping">
  }, "id" | "domain">

  export type client_scope_role_mappingOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_scope_role_mappingCountOrderByAggregateInput
    _avg?: client_scope_role_mappingAvgOrderByAggregateInput
    _max?: client_scope_role_mappingMaxOrderByAggregateInput
    _min?: client_scope_role_mappingMinOrderByAggregateInput
    _sum?: client_scope_role_mappingSumOrderByAggregateInput
  }

  export type client_scope_role_mappingScalarWhereWithAggregatesInput = {
    AND?: client_scope_role_mappingScalarWhereWithAggregatesInput | client_scope_role_mappingScalarWhereWithAggregatesInput[]
    OR?: client_scope_role_mappingScalarWhereWithAggregatesInput[]
    NOT?: client_scope_role_mappingScalarWhereWithAggregatesInput | client_scope_role_mappingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_scope_role_mapping"> | number
    domain?: StringWithAggregatesFilter<"client_scope_role_mapping"> | string
    props?: JsonWithAggregatesFilter<"client_scope_role_mapping">
    groups?: JsonWithAggregatesFilter<"client_scope_role_mapping">
  }

  export type client_scope_role_mappingCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_role_mappingCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scope_role_mappingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_scope_role_mappingMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scope_role_mappingMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scope_role_mappingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_scope_role_mappingDefaultArgs instead
     */
    export type client_scope_role_mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_scope_role_mappingDefaultArgs<ExtArgs>

    export const Client_scope_role_mappingScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_scope_role_mappingScalarFieldEnum = (typeof Client_scope_role_mappingScalarFieldEnum)[keyof typeof Client_scope_role_mappingScalarFieldEnum]
    