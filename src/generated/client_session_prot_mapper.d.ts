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

export type client_session_prot_mapper = $Result.DefaultSelection<$client_session_prot_mapperPayload>


/**
   * Model client_session_prot_mapper
   */

export type AggregateClient_session_prot_mapper = {
    _count: Client_session_prot_mapperCountAggregateOutputType | null
    _avg: Client_session_prot_mapperAvgAggregateOutputType | null
    _sum: Client_session_prot_mapperSumAggregateOutputType | null
    _min: Client_session_prot_mapperMinAggregateOutputType | null
    _max: Client_session_prot_mapperMaxAggregateOutputType | null
  }

  export type Client_session_prot_mapperAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_session_prot_mapperSumAggregateOutputType = {
    id: number | null
  }

  export type Client_session_prot_mapperMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_session_prot_mapperMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_session_prot_mapperCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_session_prot_mapperAvgAggregateInputType = {
    id?: true
  }

  export type Client_session_prot_mapperSumAggregateInputType = {
    id?: true
  }

  export type Client_session_prot_mapperMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_session_prot_mapperMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_session_prot_mapperCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_session_prot_mapperAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session_prot_mapper to aggregate.
     */
    where?: client_session_prot_mapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_prot_mappers to fetch.
     */
    orderBy?: client_session_prot_mapperOrderByWithRelationInput | client_session_prot_mapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_session_prot_mapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_prot_mappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_prot_mappers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_session_prot_mappers
    **/
    _count?: true | Client_session_prot_mapperCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_session_prot_mapperAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_session_prot_mapperSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_session_prot_mapperMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_session_prot_mapperMaxAggregateInputType
  }

  export type GetClient_session_prot_mapperAggregateType<T extends Client_session_prot_mapperAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_session_prot_mapper]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_session_prot_mapper[P]>
      : GetScalarType<T[P], AggregateClient_session_prot_mapper[P]>
  }




  export type client_session_prot_mapperGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_session_prot_mapperWhereInput
    orderBy?: client_session_prot_mapperOrderByWithAggregationInput | client_session_prot_mapperOrderByWithAggregationInput[]
    by: Client_session_prot_mapperScalarFieldEnum[] | Client_session_prot_mapperScalarFieldEnum
    having?: client_session_prot_mapperScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_session_prot_mapperCountAggregateInputType | true
    _avg?: Client_session_prot_mapperAvgAggregateInputType
    _sum?: Client_session_prot_mapperSumAggregateInputType
    _min?: Client_session_prot_mapperMinAggregateInputType
    _max?: Client_session_prot_mapperMaxAggregateInputType
  }

  export type Client_session_prot_mapperGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_session_prot_mapperCountAggregateOutputType | null
    _avg: Client_session_prot_mapperAvgAggregateOutputType | null
    _sum: Client_session_prot_mapperSumAggregateOutputType | null
    _min: Client_session_prot_mapperMinAggregateOutputType | null
    _max: Client_session_prot_mapperMaxAggregateOutputType | null
  }

  type GetClient_session_prot_mapperGroupByPayload<T extends client_session_prot_mapperGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_session_prot_mapperGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_session_prot_mapperGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_session_prot_mapperGroupByOutputType[P]>
            : GetScalarType<T[P], Client_session_prot_mapperGroupByOutputType[P]>
        }
      >
    >


  export type client_session_prot_mapperSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_session_prot_mapper"]>

  export type client_session_prot_mapperSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_session_prot_mapperPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_session_prot_mapper"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_session_prot_mapper"]>
    composites: {}
  }


  type client_session_prot_mapperGetPayload<S extends boolean | null | undefined | client_session_prot_mapperDefaultArgs> = $Result.GetResult<$client_session_prot_mapperPayload, S>

  type client_session_prot_mapperCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_session_prot_mapperFindManyArgs, 'select' | 'include'> & {
      select?: Client_session_prot_mapperCountAggregateInputType | true
    }

  export interface client_session_prot_mapperDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_session_prot_mapper'], meta: { name: 'client_session_prot_mapper' } }
    /**
     * Find zero or one Client_session_prot_mapper that matches the filter.
     * @param {client_session_prot_mapperFindUniqueArgs} args - Arguments to find a Client_session_prot_mapper
     * @example
     * // Get one Client_session_prot_mapper
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_session_prot_mapperFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_prot_mapperFindUniqueArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_session_prot_mapper that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_session_prot_mapperFindUniqueOrThrowArgs} args - Arguments to find a Client_session_prot_mapper
     * @example
     * // Get one Client_session_prot_mapper
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_session_prot_mapperFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_prot_mapperFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_session_prot_mapper that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_prot_mapperFindFirstArgs} args - Arguments to find a Client_session_prot_mapper
     * @example
     * // Get one Client_session_prot_mapper
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_session_prot_mapperFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_prot_mapperFindFirstArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_session_prot_mapper that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_prot_mapperFindFirstOrThrowArgs} args - Arguments to find a Client_session_prot_mapper
     * @example
     * // Get one Client_session_prot_mapper
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_session_prot_mapperFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_prot_mapperFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_session_prot_mappers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_prot_mapperFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_session_prot_mappers
     * const client_session_prot_mappers = await prisma.client_session_prot_mapper.findMany()
     * 
     * // Get first 10 Client_session_prot_mappers
     * const client_session_prot_mappers = await prisma.client_session_prot_mapper.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_session_prot_mapperWithIdOnly = await prisma.client_session_prot_mapper.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_session_prot_mapperFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_prot_mapperFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_session_prot_mapper.
     * @param {client_session_prot_mapperCreateArgs} args - Arguments to create a Client_session_prot_mapper.
     * @example
     * // Create one Client_session_prot_mapper
     * const Client_session_prot_mapper = await prisma.client_session_prot_mapper.create({
     *   data: {
     *     // ... data to create a Client_session_prot_mapper
     *   }
     * })
     * 
    **/
    create<T extends client_session_prot_mapperCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_prot_mapperCreateArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_session_prot_mappers.
     *     @param {client_session_prot_mapperCreateManyArgs} args - Arguments to create many Client_session_prot_mappers.
     *     @example
     *     // Create many Client_session_prot_mappers
     *     const client_session_prot_mapper = await prisma.client_session_prot_mapper.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_session_prot_mapperCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_prot_mapperCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_session_prot_mapper.
     * @param {client_session_prot_mapperDeleteArgs} args - Arguments to delete one Client_session_prot_mapper.
     * @example
     * // Delete one Client_session_prot_mapper
     * const Client_session_prot_mapper = await prisma.client_session_prot_mapper.delete({
     *   where: {
     *     // ... filter to delete one Client_session_prot_mapper
     *   }
     * })
     * 
    **/
    delete<T extends client_session_prot_mapperDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_prot_mapperDeleteArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_session_prot_mapper.
     * @param {client_session_prot_mapperUpdateArgs} args - Arguments to update one Client_session_prot_mapper.
     * @example
     * // Update one Client_session_prot_mapper
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_session_prot_mapperUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_prot_mapperUpdateArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_session_prot_mappers.
     * @param {client_session_prot_mapperDeleteManyArgs} args - Arguments to filter Client_session_prot_mappers to delete.
     * @example
     * // Delete a few Client_session_prot_mappers
     * const { count } = await prisma.client_session_prot_mapper.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_session_prot_mapperDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_session_prot_mapperDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_session_prot_mappers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_prot_mapperUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_session_prot_mappers
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_session_prot_mapperUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_prot_mapperUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_session_prot_mapper.
     * @param {client_session_prot_mapperUpsertArgs} args - Arguments to update or create a Client_session_prot_mapper.
     * @example
     * // Update or create a Client_session_prot_mapper
     * const client_session_prot_mapper = await prisma.client_session_prot_mapper.upsert({
     *   create: {
     *     // ... data to create a Client_session_prot_mapper
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_session_prot_mapper we want to update
     *   }
     * })
    **/
    upsert<T extends client_session_prot_mapperUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_session_prot_mapperUpsertArgs<ExtArgs>>
    ): Prisma__client_session_prot_mapperClient<$Result.GetResult<$client_session_prot_mapperPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_session_prot_mappers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_prot_mapperCountArgs} args - Arguments to filter Client_session_prot_mappers to count.
     * @example
     * // Count the number of Client_session_prot_mappers
     * const count = await prisma.client_session_prot_mapper.count({
     *   where: {
     *     // ... the filter for the Client_session_prot_mappers we want to count
     *   }
     * })
    **/
    count<T extends client_session_prot_mapperCountArgs>(
      args?: Subset<T, client_session_prot_mapperCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_session_prot_mapperCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_session_prot_mapper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_session_prot_mapperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_session_prot_mapperAggregateArgs>(args: Subset<T, Client_session_prot_mapperAggregateArgs>): PrismaPromise<GetClient_session_prot_mapperAggregateType<T>>

    /**
     * Group by Client_session_prot_mapper.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_session_prot_mapperGroupByArgs} args - Group by arguments.
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
      T extends client_session_prot_mapperGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_session_prot_mapperGroupByArgs['orderBy'] }
        : { orderBy?: client_session_prot_mapperGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_session_prot_mapperGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_session_prot_mapperGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_session_prot_mapper model
   */
  readonly fields: client_session_prot_mapperFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_session_prot_mapper.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_session_prot_mapperClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_session_prot_mapper model
   */ 
  interface client_session_prot_mapperFieldRefs {
    readonly id: FieldRef<"client_session_prot_mapper", 'Int'>
    readonly domain: FieldRef<"client_session_prot_mapper", 'String'>
    readonly props: FieldRef<"client_session_prot_mapper", 'Json'>
    readonly groups: FieldRef<"client_session_prot_mapper", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_session_prot_mapper findUnique
   */
  export type client_session_prot_mapperFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * Filter, which client_session_prot_mapper to fetch.
     */
    where: client_session_prot_mapperWhereUniqueInput
  }


  /**
   * client_session_prot_mapper findUniqueOrThrow
   */
  export type client_session_prot_mapperFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * Filter, which client_session_prot_mapper to fetch.
     */
    where: client_session_prot_mapperWhereUniqueInput
  }


  /**
   * client_session_prot_mapper findFirst
   */
  export type client_session_prot_mapperFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * Filter, which client_session_prot_mapper to fetch.
     */
    where?: client_session_prot_mapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_prot_mappers to fetch.
     */
    orderBy?: client_session_prot_mapperOrderByWithRelationInput | client_session_prot_mapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_session_prot_mappers.
     */
    cursor?: client_session_prot_mapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_prot_mappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_prot_mappers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_session_prot_mappers.
     */
    distinct?: Client_session_prot_mapperScalarFieldEnum | Client_session_prot_mapperScalarFieldEnum[]
  }


  /**
   * client_session_prot_mapper findFirstOrThrow
   */
  export type client_session_prot_mapperFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * Filter, which client_session_prot_mapper to fetch.
     */
    where?: client_session_prot_mapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_prot_mappers to fetch.
     */
    orderBy?: client_session_prot_mapperOrderByWithRelationInput | client_session_prot_mapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_session_prot_mappers.
     */
    cursor?: client_session_prot_mapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_prot_mappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_prot_mappers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_session_prot_mappers.
     */
    distinct?: Client_session_prot_mapperScalarFieldEnum | Client_session_prot_mapperScalarFieldEnum[]
  }


  /**
   * client_session_prot_mapper findMany
   */
  export type client_session_prot_mapperFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * Filter, which client_session_prot_mappers to fetch.
     */
    where?: client_session_prot_mapperWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_session_prot_mappers to fetch.
     */
    orderBy?: client_session_prot_mapperOrderByWithRelationInput | client_session_prot_mapperOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_session_prot_mappers.
     */
    cursor?: client_session_prot_mapperWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_session_prot_mappers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_session_prot_mappers.
     */
    skip?: number
    distinct?: Client_session_prot_mapperScalarFieldEnum | Client_session_prot_mapperScalarFieldEnum[]
  }


  /**
   * client_session_prot_mapper create
   */
  export type client_session_prot_mapperCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * The data needed to create a client_session_prot_mapper.
     */
    data: XOR<client_session_prot_mapperCreateInput, client_session_prot_mapperUncheckedCreateInput>
  }


  /**
   * client_session_prot_mapper createMany
   */
  export type client_session_prot_mapperCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_session_prot_mappers.
     */
    data: client_session_prot_mapperCreateManyInput | client_session_prot_mapperCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_session_prot_mapper update
   */
  export type client_session_prot_mapperUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * The data needed to update a client_session_prot_mapper.
     */
    data: XOR<client_session_prot_mapperUpdateInput, client_session_prot_mapperUncheckedUpdateInput>
    /**
     * Choose, which client_session_prot_mapper to update.
     */
    where: client_session_prot_mapperWhereUniqueInput
  }


  /**
   * client_session_prot_mapper updateMany
   */
  export type client_session_prot_mapperUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_session_prot_mappers.
     */
    data: XOR<client_session_prot_mapperUpdateManyMutationInput, client_session_prot_mapperUncheckedUpdateManyInput>
    /**
     * Filter which client_session_prot_mappers to update
     */
    where?: client_session_prot_mapperWhereInput
  }


  /**
   * client_session_prot_mapper upsert
   */
  export type client_session_prot_mapperUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * The filter to search for the client_session_prot_mapper to update in case it exists.
     */
    where: client_session_prot_mapperWhereUniqueInput
    /**
     * In case the client_session_prot_mapper found by the `where` argument doesn't exist, create a new client_session_prot_mapper with this data.
     */
    create: XOR<client_session_prot_mapperCreateInput, client_session_prot_mapperUncheckedCreateInput>
    /**
     * In case the client_session_prot_mapper was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_session_prot_mapperUpdateInput, client_session_prot_mapperUncheckedUpdateInput>
  }


  /**
   * client_session_prot_mapper delete
   */
  export type client_session_prot_mapperDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
    /**
     * Filter which client_session_prot_mapper to delete.
     */
    where: client_session_prot_mapperWhereUniqueInput
  }


  /**
   * client_session_prot_mapper deleteMany
   */
  export type client_session_prot_mapperDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_session_prot_mappers to delete
     */
    where?: client_session_prot_mapperWhereInput
  }


  /**
   * client_session_prot_mapper without action
   */
  export type client_session_prot_mapperDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_session_prot_mapper
     */
    select?: client_session_prot_mapperSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_session_prot_mapperWhereInput = {
    AND?: client_session_prot_mapperWhereInput | client_session_prot_mapperWhereInput[]
    OR?: client_session_prot_mapperWhereInput[]
    NOT?: client_session_prot_mapperWhereInput | client_session_prot_mapperWhereInput[]
    id?: IntFilter<"client_session_prot_mapper"> | number
    domain?: StringFilter<"client_session_prot_mapper"> | string
    props?: JsonFilter<"client_session_prot_mapper">
    groups?: JsonFilter<"client_session_prot_mapper">
  }

  export type client_session_prot_mapperOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_session_prot_mapperWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_session_prot_mapperWhereInput | client_session_prot_mapperWhereInput[]
    OR?: client_session_prot_mapperWhereInput[]
    NOT?: client_session_prot_mapperWhereInput | client_session_prot_mapperWhereInput[]
    props?: JsonFilter<"client_session_prot_mapper">
    groups?: JsonFilter<"client_session_prot_mapper">
  }, "id" | "domain">

  export type client_session_prot_mapperOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_session_prot_mapperCountOrderByAggregateInput
    _avg?: client_session_prot_mapperAvgOrderByAggregateInput
    _max?: client_session_prot_mapperMaxOrderByAggregateInput
    _min?: client_session_prot_mapperMinOrderByAggregateInput
    _sum?: client_session_prot_mapperSumOrderByAggregateInput
  }

  export type client_session_prot_mapperScalarWhereWithAggregatesInput = {
    AND?: client_session_prot_mapperScalarWhereWithAggregatesInput | client_session_prot_mapperScalarWhereWithAggregatesInput[]
    OR?: client_session_prot_mapperScalarWhereWithAggregatesInput[]
    NOT?: client_session_prot_mapperScalarWhereWithAggregatesInput | client_session_prot_mapperScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_session_prot_mapper"> | number
    domain?: StringWithAggregatesFilter<"client_session_prot_mapper"> | string
    props?: JsonWithAggregatesFilter<"client_session_prot_mapper">
    groups?: JsonWithAggregatesFilter<"client_session_prot_mapper">
  }

  export type client_session_prot_mapperCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_session_prot_mapperCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_session_prot_mapperAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_session_prot_mapperMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_session_prot_mapperMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_session_prot_mapperSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_session_prot_mapperDefaultArgs instead
     */
    export type client_session_prot_mapperArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_session_prot_mapperDefaultArgs<ExtArgs>

    export const Client_session_prot_mapperScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_session_prot_mapperScalarFieldEnum = (typeof Client_session_prot_mapperScalarFieldEnum)[keyof typeof Client_session_prot_mapperScalarFieldEnum]
    