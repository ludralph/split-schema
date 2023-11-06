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

export type client_attributes = $Result.DefaultSelection<$client_attributesPayload>


/**
   * Model client_attributes
   */

export type AggregateClient_attributes = {
    _count: Client_attributesCountAggregateOutputType | null
    _avg: Client_attributesAvgAggregateOutputType | null
    _sum: Client_attributesSumAggregateOutputType | null
    _min: Client_attributesMinAggregateOutputType | null
    _max: Client_attributesMaxAggregateOutputType | null
  }

  export type Client_attributesAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_attributesSumAggregateOutputType = {
    id: number | null
  }

  export type Client_attributesMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_attributesMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_attributesCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_attributesAvgAggregateInputType = {
    id?: true
  }

  export type Client_attributesSumAggregateInputType = {
    id?: true
  }

  export type Client_attributesMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_attributesMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_attributesCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_attributesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_attributes to aggregate.
     */
    where?: client_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_attributess to fetch.
     */
    orderBy?: client_attributesOrderByWithRelationInput | client_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_attributess.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_attributess
    **/
    _count?: true | Client_attributesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_attributesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_attributesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_attributesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_attributesMaxAggregateInputType
  }

  export type GetClient_attributesAggregateType<T extends Client_attributesAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_attributes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_attributes[P]>
      : GetScalarType<T[P], AggregateClient_attributes[P]>
  }




  export type client_attributesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_attributesWhereInput
    orderBy?: client_attributesOrderByWithAggregationInput | client_attributesOrderByWithAggregationInput[]
    by: Client_attributesScalarFieldEnum[] | Client_attributesScalarFieldEnum
    having?: client_attributesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_attributesCountAggregateInputType | true
    _avg?: Client_attributesAvgAggregateInputType
    _sum?: Client_attributesSumAggregateInputType
    _min?: Client_attributesMinAggregateInputType
    _max?: Client_attributesMaxAggregateInputType
  }

  export type Client_attributesGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_attributesCountAggregateOutputType | null
    _avg: Client_attributesAvgAggregateOutputType | null
    _sum: Client_attributesSumAggregateOutputType | null
    _min: Client_attributesMinAggregateOutputType | null
    _max: Client_attributesMaxAggregateOutputType | null
  }

  type GetClient_attributesGroupByPayload<T extends client_attributesGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_attributesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_attributesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_attributesGroupByOutputType[P]>
            : GetScalarType<T[P], Client_attributesGroupByOutputType[P]>
        }
      >
    >


  export type client_attributesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_attributes"]>

  export type client_attributesSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_attributesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_attributes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_attributes"]>
    composites: {}
  }


  type client_attributesGetPayload<S extends boolean | null | undefined | client_attributesDefaultArgs> = $Result.GetResult<$client_attributesPayload, S>

  type client_attributesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_attributesFindManyArgs, 'select' | 'include'> & {
      select?: Client_attributesCountAggregateInputType | true
    }

  export interface client_attributesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_attributes'], meta: { name: 'client_attributes' } }
    /**
     * Find zero or one Client_attributes that matches the filter.
     * @param {client_attributesFindUniqueArgs} args - Arguments to find a Client_attributes
     * @example
     * // Get one Client_attributes
     * const client_attributes = await prisma.client_attributes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_attributesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_attributesFindUniqueArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_attributes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_attributesFindUniqueOrThrowArgs} args - Arguments to find a Client_attributes
     * @example
     * // Get one Client_attributes
     * const client_attributes = await prisma.client_attributes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_attributesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_attributesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_attributesFindFirstArgs} args - Arguments to find a Client_attributes
     * @example
     * // Get one Client_attributes
     * const client_attributes = await prisma.client_attributes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_attributesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_attributesFindFirstArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_attributes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_attributesFindFirstOrThrowArgs} args - Arguments to find a Client_attributes
     * @example
     * // Get one Client_attributes
     * const client_attributes = await prisma.client_attributes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_attributesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_attributesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_attributess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_attributesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_attributess
     * const client_attributess = await prisma.client_attributes.findMany()
     * 
     * // Get first 10 Client_attributess
     * const client_attributess = await prisma.client_attributes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_attributesWithIdOnly = await prisma.client_attributes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_attributesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_attributesFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_attributes.
     * @param {client_attributesCreateArgs} args - Arguments to create a Client_attributes.
     * @example
     * // Create one Client_attributes
     * const Client_attributes = await prisma.client_attributes.create({
     *   data: {
     *     // ... data to create a Client_attributes
     *   }
     * })
     * 
    **/
    create<T extends client_attributesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_attributesCreateArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_attributess.
     *     @param {client_attributesCreateManyArgs} args - Arguments to create many Client_attributess.
     *     @example
     *     // Create many Client_attributess
     *     const client_attributes = await prisma.client_attributes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_attributesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_attributesCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_attributes.
     * @param {client_attributesDeleteArgs} args - Arguments to delete one Client_attributes.
     * @example
     * // Delete one Client_attributes
     * const Client_attributes = await prisma.client_attributes.delete({
     *   where: {
     *     // ... filter to delete one Client_attributes
     *   }
     * })
     * 
    **/
    delete<T extends client_attributesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_attributesDeleteArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_attributes.
     * @param {client_attributesUpdateArgs} args - Arguments to update one Client_attributes.
     * @example
     * // Update one Client_attributes
     * const client_attributes = await prisma.client_attributes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_attributesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_attributesUpdateArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_attributess.
     * @param {client_attributesDeleteManyArgs} args - Arguments to filter Client_attributess to delete.
     * @example
     * // Delete a few Client_attributess
     * const { count } = await prisma.client_attributes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_attributesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_attributesDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_attributess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_attributesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_attributess
     * const client_attributes = await prisma.client_attributes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_attributesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_attributesUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_attributes.
     * @param {client_attributesUpsertArgs} args - Arguments to update or create a Client_attributes.
     * @example
     * // Update or create a Client_attributes
     * const client_attributes = await prisma.client_attributes.upsert({
     *   create: {
     *     // ... data to create a Client_attributes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_attributes we want to update
     *   }
     * })
    **/
    upsert<T extends client_attributesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_attributesUpsertArgs<ExtArgs>>
    ): Prisma__client_attributesClient<$Result.GetResult<$client_attributesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_attributess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_attributesCountArgs} args - Arguments to filter Client_attributess to count.
     * @example
     * // Count the number of Client_attributess
     * const count = await prisma.client_attributes.count({
     *   where: {
     *     // ... the filter for the Client_attributess we want to count
     *   }
     * })
    **/
    count<T extends client_attributesCountArgs>(
      args?: Subset<T, client_attributesCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_attributesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_attributesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_attributesAggregateArgs>(args: Subset<T, Client_attributesAggregateArgs>): PrismaPromise<GetClient_attributesAggregateType<T>>

    /**
     * Group by Client_attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_attributesGroupByArgs} args - Group by arguments.
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
      T extends client_attributesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_attributesGroupByArgs['orderBy'] }
        : { orderBy?: client_attributesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_attributesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_attributesGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_attributes model
   */
  readonly fields: client_attributesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_attributes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_attributesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_attributes model
   */ 
  interface client_attributesFieldRefs {
    readonly id: FieldRef<"client_attributes", 'Int'>
    readonly domain: FieldRef<"client_attributes", 'String'>
    readonly props: FieldRef<"client_attributes", 'Json'>
    readonly groups: FieldRef<"client_attributes", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_attributes findUnique
   */
  export type client_attributesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_attributes to fetch.
     */
    where: client_attributesWhereUniqueInput
  }


  /**
   * client_attributes findUniqueOrThrow
   */
  export type client_attributesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_attributes to fetch.
     */
    where: client_attributesWhereUniqueInput
  }


  /**
   * client_attributes findFirst
   */
  export type client_attributesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_attributes to fetch.
     */
    where?: client_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_attributess to fetch.
     */
    orderBy?: client_attributesOrderByWithRelationInput | client_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_attributess.
     */
    cursor?: client_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_attributess.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_attributess.
     */
    distinct?: Client_attributesScalarFieldEnum | Client_attributesScalarFieldEnum[]
  }


  /**
   * client_attributes findFirstOrThrow
   */
  export type client_attributesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_attributes to fetch.
     */
    where?: client_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_attributess to fetch.
     */
    orderBy?: client_attributesOrderByWithRelationInput | client_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_attributess.
     */
    cursor?: client_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_attributess.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_attributess.
     */
    distinct?: Client_attributesScalarFieldEnum | Client_attributesScalarFieldEnum[]
  }


  /**
   * client_attributes findMany
   */
  export type client_attributesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * Filter, which client_attributess to fetch.
     */
    where?: client_attributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_attributess to fetch.
     */
    orderBy?: client_attributesOrderByWithRelationInput | client_attributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_attributess.
     */
    cursor?: client_attributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_attributess from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_attributess.
     */
    skip?: number
    distinct?: Client_attributesScalarFieldEnum | Client_attributesScalarFieldEnum[]
  }


  /**
   * client_attributes create
   */
  export type client_attributesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * The data needed to create a client_attributes.
     */
    data: XOR<client_attributesCreateInput, client_attributesUncheckedCreateInput>
  }


  /**
   * client_attributes createMany
   */
  export type client_attributesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_attributess.
     */
    data: client_attributesCreateManyInput | client_attributesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_attributes update
   */
  export type client_attributesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * The data needed to update a client_attributes.
     */
    data: XOR<client_attributesUpdateInput, client_attributesUncheckedUpdateInput>
    /**
     * Choose, which client_attributes to update.
     */
    where: client_attributesWhereUniqueInput
  }


  /**
   * client_attributes updateMany
   */
  export type client_attributesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_attributess.
     */
    data: XOR<client_attributesUpdateManyMutationInput, client_attributesUncheckedUpdateManyInput>
    /**
     * Filter which client_attributess to update
     */
    where?: client_attributesWhereInput
  }


  /**
   * client_attributes upsert
   */
  export type client_attributesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * The filter to search for the client_attributes to update in case it exists.
     */
    where: client_attributesWhereUniqueInput
    /**
     * In case the client_attributes found by the `where` argument doesn't exist, create a new client_attributes with this data.
     */
    create: XOR<client_attributesCreateInput, client_attributesUncheckedCreateInput>
    /**
     * In case the client_attributes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_attributesUpdateInput, client_attributesUncheckedUpdateInput>
  }


  /**
   * client_attributes delete
   */
  export type client_attributesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
    /**
     * Filter which client_attributes to delete.
     */
    where: client_attributesWhereUniqueInput
  }


  /**
   * client_attributes deleteMany
   */
  export type client_attributesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_attributess to delete
     */
    where?: client_attributesWhereInput
  }


  /**
   * client_attributes without action
   */
  export type client_attributesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_attributes
     */
    select?: client_attributesSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_attributesWhereInput = {
    AND?: client_attributesWhereInput | client_attributesWhereInput[]
    OR?: client_attributesWhereInput[]
    NOT?: client_attributesWhereInput | client_attributesWhereInput[]
    id?: IntFilter<"client_attributes"> | number
    domain?: StringFilter<"client_attributes"> | string
    props?: JsonFilter<"client_attributes">
    groups?: JsonFilter<"client_attributes">
  }

  export type client_attributesOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_attributesWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_attributesWhereInput | client_attributesWhereInput[]
    OR?: client_attributesWhereInput[]
    NOT?: client_attributesWhereInput | client_attributesWhereInput[]
    props?: JsonFilter<"client_attributes">
    groups?: JsonFilter<"client_attributes">
  }, "id" | "domain">

  export type client_attributesOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_attributesCountOrderByAggregateInput
    _avg?: client_attributesAvgOrderByAggregateInput
    _max?: client_attributesMaxOrderByAggregateInput
    _min?: client_attributesMinOrderByAggregateInput
    _sum?: client_attributesSumOrderByAggregateInput
  }

  export type client_attributesScalarWhereWithAggregatesInput = {
    AND?: client_attributesScalarWhereWithAggregatesInput | client_attributesScalarWhereWithAggregatesInput[]
    OR?: client_attributesScalarWhereWithAggregatesInput[]
    NOT?: client_attributesScalarWhereWithAggregatesInput | client_attributesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_attributes"> | number
    domain?: StringWithAggregatesFilter<"client_attributes"> | string
    props?: JsonWithAggregatesFilter<"client_attributes">
    groups?: JsonWithAggregatesFilter<"client_attributes">
  }

  export type client_attributesCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_attributesCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_attributesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_attributesMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_attributesMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_attributesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_attributesDefaultArgs instead
     */
    export type client_attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_attributesDefaultArgs<ExtArgs>

    export const Client_attributesScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_attributesScalarFieldEnum = (typeof Client_attributesScalarFieldEnum)[keyof typeof Client_attributesScalarFieldEnum]
    