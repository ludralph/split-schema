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

export type client_scope_attributes = $Result.DefaultSelection<$client_scope_attributesPayload>


/**
   * Model client_scope_attributes
   */

export type AggregateClient_scope_attributes = {
    _count: Client_scope_attributesCountAggregateOutputType | null
    _avg: Client_scope_attributesAvgAggregateOutputType | null
    _sum: Client_scope_attributesSumAggregateOutputType | null
    _min: Client_scope_attributesMinAggregateOutputType | null
    _max: Client_scope_attributesMaxAggregateOutputType | null
  }

  export type Client_scope_attributesAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_scope_attributesSumAggregateOutputType = {
    id: number | null
  }

  export type Client_scope_attributesMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scope_attributesMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_scope_attributesCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_scope_attributesAvgAggregateInputType = {
    id?: true
  }

  export type Client_scope_attributesSumAggregateInputType = {
    id?: true
  }

  export type Client_scope_attributesMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scope_attributesMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_scope_attributesCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_scope_attributesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope_attributes to aggregate.
     */
    where?: client_scope_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_attributess to fetch.
     */
    orderBy?: client_scope_attributesOrderByWithRelationInput | client_scope_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_scope_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_attributess.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_scope_attributess
    **/
    _count?: true | Client_scope_attributesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_scope_attributesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_scope_attributesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_scope_attributesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_scope_attributesMaxAggregateInputType
  }

  export type GetClient_scope_attributesAggregateType<T extends Client_scope_attributesAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_scope_attributes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_scope_attributes[P]>
      : GetScalarType<T[P], AggregateClient_scope_attributes[P]>
  }




  export type client_scope_attributesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_scope_attributesWhereInput
    orderBy?: client_scope_attributesOrderByWithAggregationInput | client_scope_attributesOrderByWithAggregationInput[]
    by: Client_scope_attributesScalarFieldEnum[] | Client_scope_attributesScalarFieldEnum
    having?: client_scope_attributesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_scope_attributesCountAggregateInputType | true
    _avg?: Client_scope_attributesAvgAggregateInputType
    _sum?: Client_scope_attributesSumAggregateInputType
    _min?: Client_scope_attributesMinAggregateInputType
    _max?: Client_scope_attributesMaxAggregateInputType
  }

  export type Client_scope_attributesGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_scope_attributesCountAggregateOutputType | null
    _avg: Client_scope_attributesAvgAggregateOutputType | null
    _sum: Client_scope_attributesSumAggregateOutputType | null
    _min: Client_scope_attributesMinAggregateOutputType | null
    _max: Client_scope_attributesMaxAggregateOutputType | null
  }

  type GetClient_scope_attributesGroupByPayload<T extends client_scope_attributesGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_scope_attributesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_scope_attributesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_scope_attributesGroupByOutputType[P]>
            : GetScalarType<T[P], Client_scope_attributesGroupByOutputType[P]>
        }
      >
    >


  export type client_scope_attributesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_scope_attributes"]>

  export type client_scope_attributesSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_scope_attributesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_scope_attributes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_scope_attributes"]>
    composites: {}
  }


  type client_scope_attributesGetPayload<S extends boolean | null | undefined | client_scope_attributesDefaultArgs> = $Result.GetResult<$client_scope_attributesPayload, S>

  type client_scope_attributesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_scope_attributesFindManyArgs, 'select' | 'include'> & {
      select?: Client_scope_attributesCountAggregateInputType | true
    }

  export interface client_scope_attributesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_scope_attributes'], meta: { name: 'client_scope_attributes' } }
    /**
     * Find zero or one Client_scope_attributes that matches the filter.
     * @param {client_scope_attributesFindUniqueArgs} args - Arguments to find a Client_scope_attributes
     * @example
     * // Get one Client_scope_attributes
     * const client_scope_attributes = await prisma.client_scope_attributes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_scope_attributesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_attributesFindUniqueArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_scope_attributes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_scope_attributesFindUniqueOrThrowArgs} args - Arguments to find a Client_scope_attributes
     * @example
     * // Get one Client_scope_attributes
     * const client_scope_attributes = await prisma.client_scope_attributes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_scope_attributesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_attributesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_scope_attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_attributesFindFirstArgs} args - Arguments to find a Client_scope_attributes
     * @example
     * // Get one Client_scope_attributes
     * const client_scope_attributes = await prisma.client_scope_attributes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_scope_attributesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_attributesFindFirstArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_scope_attributes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_attributesFindFirstOrThrowArgs} args - Arguments to find a Client_scope_attributes
     * @example
     * // Get one Client_scope_attributes
     * const client_scope_attributes = await prisma.client_scope_attributes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_scope_attributesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_attributesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_scope_attributess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_attributesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_scope_attributess
     * const client_scope_attributess = await prisma.client_scope_attributes.findMany()
     * 
     * // Get first 10 Client_scope_attributess
     * const client_scope_attributess = await prisma.client_scope_attributes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_scope_attributesWithIdOnly = await prisma.client_scope_attributes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_scope_attributesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_attributesFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_scope_attributes.
     * @param {client_scope_attributesCreateArgs} args - Arguments to create a Client_scope_attributes.
     * @example
     * // Create one Client_scope_attributes
     * const Client_scope_attributes = await prisma.client_scope_attributes.create({
     *   data: {
     *     // ... data to create a Client_scope_attributes
     *   }
     * })
     * 
    **/
    create<T extends client_scope_attributesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_attributesCreateArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_scope_attributess.
     *     @param {client_scope_attributesCreateManyArgs} args - Arguments to create many Client_scope_attributess.
     *     @example
     *     // Create many Client_scope_attributess
     *     const client_scope_attributes = await prisma.client_scope_attributes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_scope_attributesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_attributesCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_scope_attributes.
     * @param {client_scope_attributesDeleteArgs} args - Arguments to delete one Client_scope_attributes.
     * @example
     * // Delete one Client_scope_attributes
     * const Client_scope_attributes = await prisma.client_scope_attributes.delete({
     *   where: {
     *     // ... filter to delete one Client_scope_attributes
     *   }
     * })
     * 
    **/
    delete<T extends client_scope_attributesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_attributesDeleteArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_scope_attributes.
     * @param {client_scope_attributesUpdateArgs} args - Arguments to update one Client_scope_attributes.
     * @example
     * // Update one Client_scope_attributes
     * const client_scope_attributes = await prisma.client_scope_attributes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_scope_attributesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_attributesUpdateArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_scope_attributess.
     * @param {client_scope_attributesDeleteManyArgs} args - Arguments to filter Client_scope_attributess to delete.
     * @example
     * // Delete a few Client_scope_attributess
     * const { count } = await prisma.client_scope_attributes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_scope_attributesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_scope_attributesDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_scope_attributess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_attributesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_scope_attributess
     * const client_scope_attributes = await prisma.client_scope_attributes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_scope_attributesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_attributesUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_scope_attributes.
     * @param {client_scope_attributesUpsertArgs} args - Arguments to update or create a Client_scope_attributes.
     * @example
     * // Update or create a Client_scope_attributes
     * const client_scope_attributes = await prisma.client_scope_attributes.upsert({
     *   create: {
     *     // ... data to create a Client_scope_attributes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_scope_attributes we want to update
     *   }
     * })
    **/
    upsert<T extends client_scope_attributesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_scope_attributesUpsertArgs<ExtArgs>>
    ): Prisma__client_scope_attributesClient<$Result.GetResult<$client_scope_attributesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_scope_attributess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_attributesCountArgs} args - Arguments to filter Client_scope_attributess to count.
     * @example
     * // Count the number of Client_scope_attributess
     * const count = await prisma.client_scope_attributes.count({
     *   where: {
     *     // ... the filter for the Client_scope_attributess we want to count
     *   }
     * })
    **/
    count<T extends client_scope_attributesCountArgs>(
      args?: Subset<T, client_scope_attributesCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_scope_attributesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_scope_attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_scope_attributesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_scope_attributesAggregateArgs>(args: Subset<T, Client_scope_attributesAggregateArgs>): PrismaPromise<GetClient_scope_attributesAggregateType<T>>

    /**
     * Group by Client_scope_attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_scope_attributesGroupByArgs} args - Group by arguments.
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
      T extends client_scope_attributesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_scope_attributesGroupByArgs['orderBy'] }
        : { orderBy?: client_scope_attributesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_scope_attributesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_scope_attributesGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_scope_attributes model
   */
  readonly fields: client_scope_attributesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_scope_attributes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_scope_attributesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_scope_attributes model
   */ 
  interface client_scope_attributesFieldRefs {
    readonly id: FieldRef<"client_scope_attributes", 'Int'>
    readonly domain: FieldRef<"client_scope_attributes", 'String'>
    readonly props: FieldRef<"client_scope_attributes", 'Json'>
    readonly groups: FieldRef<"client_scope_attributes", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_scope_attributes findUnique
   */
  export type client_scope_attributesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_attributes to fetch.
     */
    where: client_scope_attributesWhereUniqueInput
  }


  /**
   * client_scope_attributes findUniqueOrThrow
   */
  export type client_scope_attributesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_attributes to fetch.
     */
    where: client_scope_attributesWhereUniqueInput
  }


  /**
   * client_scope_attributes findFirst
   */
  export type client_scope_attributesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_attributes to fetch.
     */
    where?: client_scope_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_attributess to fetch.
     */
    orderBy?: client_scope_attributesOrderByWithRelationInput | client_scope_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scope_attributess.
     */
    cursor?: client_scope_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_attributess.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scope_attributess.
     */
    distinct?: Client_scope_attributesScalarFieldEnum | Client_scope_attributesScalarFieldEnum[]
  }


  /**
   * client_scope_attributes findFirstOrThrow
   */
  export type client_scope_attributesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_attributes to fetch.
     */
    where?: client_scope_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_attributess to fetch.
     */
    orderBy?: client_scope_attributesOrderByWithRelationInput | client_scope_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_scope_attributess.
     */
    cursor?: client_scope_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_attributess.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_scope_attributess.
     */
    distinct?: Client_scope_attributesScalarFieldEnum | Client_scope_attributesScalarFieldEnum[]
  }


  /**
   * client_scope_attributes findMany
   */
  export type client_scope_attributesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_scope_attributess to fetch.
     */
    where?: client_scope_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_scope_attributess to fetch.
     */
    orderBy?: client_scope_attributesOrderByWithRelationInput | client_scope_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_scope_attributess.
     */
    cursor?: client_scope_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_scope_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_scope_attributess.
     */
    skip?: number
    distinct?: Client_scope_attributesScalarFieldEnum | Client_scope_attributesScalarFieldEnum[]
  }


  /**
   * client_scope_attributes create
   */
  export type client_scope_attributesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * The data needed to create a client_scope_attributes.
     */
    data: XOR<client_scope_attributesCreateInput, client_scope_attributesUncheckedCreateInput>
  }


  /**
   * client_scope_attributes createMany
   */
  export type client_scope_attributesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_scope_attributess.
     */
    data: client_scope_attributesCreateManyInput | client_scope_attributesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_scope_attributes update
   */
  export type client_scope_attributesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * The data needed to update a client_scope_attributes.
     */
    data: XOR<client_scope_attributesUpdateInput, client_scope_attributesUncheckedUpdateInput>
    /**
     * Choose, which client_scope_attributes to update.
     */
    where: client_scope_attributesWhereUniqueInput
  }


  /**
   * client_scope_attributes updateMany
   */
  export type client_scope_attributesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_scope_attributess.
     */
    data: XOR<client_scope_attributesUpdateManyMutationInput, client_scope_attributesUncheckedUpdateManyInput>
    /**
     * Filter which client_scope_attributess to update
     */
    where?: client_scope_attributesWhereInput
  }


  /**
   * client_scope_attributes upsert
   */
  export type client_scope_attributesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * The filter to search for the client_scope_attributes to update in case it exists.
     */
    where: client_scope_attributesWhereUniqueInput
    /**
     * In case the client_scope_attributes found by the `where` argument doesn't exist, create a new client_scope_attributes with this data.
     */
    create: XOR<client_scope_attributesCreateInput, client_scope_attributesUncheckedCreateInput>
    /**
     * In case the client_scope_attributes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_scope_attributesUpdateInput, client_scope_attributesUncheckedUpdateInput>
  }


  /**
   * client_scope_attributes delete
   */
  export type client_scope_attributesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
    /**
     * Filter which client_scope_attributes to delete.
     */
    where: client_scope_attributesWhereUniqueInput
  }


  /**
   * client_scope_attributes deleteMany
   */
  export type client_scope_attributesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_scope_attributess to delete
     */
    where?: client_scope_attributesWhereInput
  }


  /**
   * client_scope_attributes without action
   */
  export type client_scope_attributesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_scope_attributes
     */
    select?: client_scope_attributesSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_scope_attributesWhereInput = {
    AND?: client_scope_attributesWhereInput | client_scope_attributesWhereInput[]
    OR?: client_scope_attributesWhereInput[]
    NOT?: client_scope_attributesWhereInput | client_scope_attributesWhereInput[]
    id?: IntFilter<"client_scope_attributes"> | number
    domain?: StringFilter<"client_scope_attributes"> | string
    props?: JsonFilter<"client_scope_attributes">
    groups?: JsonFilter<"client_scope_attributes">
  }

  export type client_scope_attributesOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scope_attributesWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_scope_attributesWhereInput | client_scope_attributesWhereInput[]
    OR?: client_scope_attributesWhereInput[]
    NOT?: client_scope_attributesWhereInput | client_scope_attributesWhereInput[]
    props?: JsonFilter<"client_scope_attributes">
    groups?: JsonFilter<"client_scope_attributes">
  }, "id" | "domain">

  export type client_scope_attributesOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_scope_attributesCountOrderByAggregateInput
    _avg?: client_scope_attributesAvgOrderByAggregateInput
    _max?: client_scope_attributesMaxOrderByAggregateInput
    _min?: client_scope_attributesMinOrderByAggregateInput
    _sum?: client_scope_attributesSumOrderByAggregateInput
  }

  export type client_scope_attributesScalarWhereWithAggregatesInput = {
    AND?: client_scope_attributesScalarWhereWithAggregatesInput | client_scope_attributesScalarWhereWithAggregatesInput[]
    OR?: client_scope_attributesScalarWhereWithAggregatesInput[]
    NOT?: client_scope_attributesScalarWhereWithAggregatesInput | client_scope_attributesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_scope_attributes"> | number
    domain?: StringWithAggregatesFilter<"client_scope_attributes"> | string
    props?: JsonWithAggregatesFilter<"client_scope_attributes">
    groups?: JsonWithAggregatesFilter<"client_scope_attributes">
  }

  export type client_scope_attributesCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_scope_attributesCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_scope_attributesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_scope_attributesMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scope_attributesMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_scope_attributesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_scope_attributesDefaultArgs instead
     */
    export type client_scope_attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_scope_attributesDefaultArgs<ExtArgs>

    export const Client_scope_attributesScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_scope_attributesScalarFieldEnum = (typeof Client_scope_attributesScalarFieldEnum)[keyof typeof Client_scope_attributesScalarFieldEnum]
    